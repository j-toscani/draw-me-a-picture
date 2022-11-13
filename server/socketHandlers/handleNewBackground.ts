import { Server } from "socket.io";

export default function handleNewBackground(io: Server) {
  return (file: File) => {
    io.emit("update-canvas-img", file);
  };
}
