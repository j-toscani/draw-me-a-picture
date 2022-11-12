import { Server, Socket } from "socket.io";
import handleDisconnect from "./handleDisconnect";
import handleMessage from "./handleMessage";

const connected = new Set<string>();

export default function handleConnect(io: Server) {
  return (socket: Socket) => {
    trackConnected(socket.id);

    socket.on("message", handleMessage);
    socket.on("disconnect", handleDisconnect(connected));
  };
}

function trackConnected(id: string) {
  connected.add(id);
  console.log(`There are [${connected.size}] users connected.`);
}
