import { Server, Socket } from "socket.io";
import handleDisconnect from "./handleDisconnect";
import handleMessage, { getHistory } from "./handleMessage";

export default function handleConnect(io: Server) {
  return (socket: Socket) => {
    trackConnected(io);

    socket.emit("history", getHistory());
    socket.on("message", handleMessage(io, socket));
    socket.on("disconnect", handleDisconnect);
  };
}

function trackConnected(io: Server) {
  console.log(`There are [${io.listeners("message").length}] users connected.`);
}
