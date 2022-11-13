import { Socket } from "socket.io";

const rooms: Map<string, { file: ArrayBuffer; users: Set<string> }> = new Map();

export default function handleCreateRoom(socket: Socket) {
  return (file: ArrayBuffer) => {
    rooms.set(socket.id, { file, users: new Set<string>().add(socket.id) });
    socket.emit("move-to-room", socket.id);
  };
}

export function getRoomState(id: string) {
  return rooms.get(id);
}
