interface Room {
  file: ArrayBuffer;
  users: Set<string>;
  removeSelf: NodeJS.Timeout;
}

const rooms: Map<string, Room> = new Map();

export function getRoom(id: string) {
  const room = getRooms().get(id);
  if (room) {
    clearTimeout(room.removeSelf);
    room.removeSelf = removeRoomAfter(id);
  }

  return room;
}

export function removeRoomAfter(id: string, after = 1000 * 60 * 30) {
  return setTimeout(() => {
    getRooms().delete(id);
  }, after);
}

export function getRooms() {
  return rooms;
}
