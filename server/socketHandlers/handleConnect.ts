import { Server, Socket } from "socket.io";
import handleDisconnect from "./handleDisconnect";
import handleMessage, { getHistory } from "./handleMessage";
import handleNewBackground from "./handleNewBackground";

const connected = new Set<string>();

export default function handleConnect(io: Server) {
  return (socket: Socket) => {
    trackConnected(socket);

    socket.emit("history", getHistory());
    socket.on("message", handleMessage(io, socket));
    socket.on("disconnect", handleDisconnect(socket, connected));
    socket.on("new-background", handleNewBackground(io));
  };
}

function trackConnected(socket: Socket) {
  connected.add(socket.id);
  console.log(`There are [${connected.size}] users connected.`);
}
