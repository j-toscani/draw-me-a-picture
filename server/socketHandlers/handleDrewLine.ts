import { Socket } from "socket.io";

export default function handleDrewLine(socket:Socket) {
    return (path: [number,number][]) => {
        socket.broadcast.emit("new-line", path)
    }
}