import { Server, Socket } from "socket.io";
import handleDisconnect from "./handleDisconnect";

const connected = new Set<string>();

export default function handleConnect(io: Server) {
  return (socket: Socket) => {
    trackConnected(socket);

    socket.on("disconnect", handleDisconnect(socket, connected));
    socket.on("bgimagedata", (data: ArrayBuffer) => {
      socket.broadcast.emit("bgimageupdate", data);
    });
  };
}

function trackConnected(socket: Socket) {
  connected.add(socket.id);
  console.log(`There are [${connected.size}] users connected.`);
}
