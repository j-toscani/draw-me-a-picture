import { Socket } from "socket.io";

export default function handleDisconnect(socket: Socket, connected: Set<string>) {
  return () => {
    connected.delete(socket.id);
    console.log(`User [${socket.id}] disconnected.`);
  };
}
