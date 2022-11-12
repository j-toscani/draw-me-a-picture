import { Socket, Server } from "socket.io";

const history: string[] = [];

export default function handleMessage(io: Server, socket: Socket) {
    return (data: string) => {
        history.push(data);
        io.emit("message-added", data);
    }
}

export function getHistory() {
    return history;
}
