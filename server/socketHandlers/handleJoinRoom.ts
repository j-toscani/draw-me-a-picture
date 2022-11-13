import { Socket } from "socket.io";

export default function handleJoinRoom(socket: Socket) {
    return (id: string) => {
        socket.join(id);
    }
}