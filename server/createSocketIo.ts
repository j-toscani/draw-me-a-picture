import { Server as HTTPServer } from "http";
import { Server as SocketServer } from "socket.io";
import handleConnect from "./socketHandlers/handleConnect";

export default function createSocketIo(server: HTTPServer) {
  const io = new SocketServer(server);
  io.on("connection", handleConnect(io));
  return io;
}
