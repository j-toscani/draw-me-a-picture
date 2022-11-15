import { Server, Socket } from "socket.io";
import handleDrewLine from "./handleDrewLine";
export interface User {
  name: string;
  color: string;
  isCommander: boolean
}

const users = new Map<string, User>();

export default function handleConnect(io: Server) {
  return (socket: Socket) => {
    trackConnected(socket);
    updateUserData(io);
    const updateUser = createUpdateUser(io);

    socket.on("disconnect", handleDisconnect(socket, io));
    socket.on("drew-line", handleDrewLine(socket))
    socket.on("updateuser", updateUser);
    socket.on("updateme", (user: User) => {
      updateUser(user, socket.id);
    });
    socket.on("bgimagedata", broadcastBgImageData(socket));
  };
}

function broadcastBgImageData(socket: Socket) {
  return (data: ArrayBuffer) => socket.broadcast.emit("bgimageupdate", data);
}

function handleDisconnect(socket: Socket, io: Server) {
  return () => {
    users.delete(socket.id);
    console.log(`User [${socket.id}] disconnected.`);
    updateUserData(io);
  };
}

function trackConnected(socket: Socket) {
  users.set(socket.id, { name: socket.id, color: "#000", isCommander: false });
  console.log(
    `There are [${users.size}] users connected.`
  );
}

function createUpdateUser(io: Server) {
  return (user: User, id: string) => {
    if (!id) {
      console.error("Cannot update user without id");
      return;
    }
    users.set(id, user);
    updateUserData(io);
  };
}

function updateUserData(io: Server) {
  const currentUsers: User[] = [];
  users.forEach((value) => {
    currentUsers.push(value);
  });
  io.emit("update-users", currentUsers);
}
