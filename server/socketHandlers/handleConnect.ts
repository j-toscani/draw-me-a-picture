import { Server, Socket } from "socket.io";
import handleDisconnect from "./handleDisconnect";
import handleNewBackground from "./handleNewBackground";

const connected = new Set<string>();

export default function handleConnect(io: Server) {
  return (socket: Socket) => {
    trackConnected(socket);

    socket.on("disconnect", handleDisconnect(socket, connected));
    socket.on("new-background", handleNewBackground(socket));
  };
}

function trackConnected(socket: Socket) {
  connected.add(socket.id);
  console.log(`There are [${connected.size}] users connected.`);
}
