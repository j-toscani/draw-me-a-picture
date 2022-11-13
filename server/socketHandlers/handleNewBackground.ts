import { Socket } from "socket.io";

export default function handleNewBackground(socket: Socket) {
  return (file: File) => {
    socket.broadcast.emit("update-canvas-img", file);
  };
}
