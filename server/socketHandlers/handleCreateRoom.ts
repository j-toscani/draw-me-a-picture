import { Socket } from "socket.io";
import { getRooms, removeRoomAfter } from "./handleRooms";

export default function handleCreateRoom(socket: Socket) {
  return (data: { file: ArrayBuffer; room: string }) => {
    const { room, file } = data;
    getRooms().set(room, {
      file,
      users: new Set<string>().add(room),
      removeSelf: removeRoomAfter(room),
    });
    socket.emit("move-to-room", room);
  };
}
