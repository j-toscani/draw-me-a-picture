import { Socket } from "socket.io";
import { getRooms } from "./handleRooms";

export default function handleCreateRoom(socket: Socket) {
  return (file: ArrayBuffer) => {
    getRooms().set(socket.id, {
      file,
      users: new Set<string>().add(socket.id),
      removeSelf: removeSelfAfter(socket.id),
    });
    socket.emit("move-to-room", socket.id);
  };
}

function removeSelfAfter(id: string, after = 1000 * 60 * 30) {
  return setTimeout(() => {
    getRooms().delete(id);
  }, after);
}
