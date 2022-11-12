import { Server as HTTPServer } from "http";
import { Socket, Server as SocketServer } from "socket.io";
import handleConnect from "./socketHandlers/handleConnect";

export default function createSocketIo(server: HTTPServer) {
  const io = new SocketServer(server);
  io.on("connection", handleConnect);
  return io;
}
