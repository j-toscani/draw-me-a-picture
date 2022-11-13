interface Room {
  file: ArrayBuffer;
  users: Set<string>;
  removeSelf: NodeJS.Timeout;
}

const rooms: Map<string, Room> = new Map();

export function getRoom(id: string) {
  const room = rooms.get(id);

  if (room) {
    clearTimeout(room.removeSelf);
    room.removeSelf = removeSelfAfter(id);
  }

  return room;
}

export function getRooms() {
  return rooms;
}
