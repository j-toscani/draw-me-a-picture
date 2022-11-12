import { Socket, Server } from "socket.io";

const history: string[] = [];

export default function handleMessage(io: Server, socket: Socket) {
    (data: string) => {
        history.push(data);
        console.log("Message recieved:", data);
        io.emit("message-added", data);
    }
}
