import { Socket } from "socket.io";
import handleDisconnect from "./handleDisconnect";
import handleMessage from "./handleMessage";

export default function handleConnect(socket: Socket) {
  socket.on("message", handleMessage);
  socket.on("disconnect", handleDisconnect);
}
