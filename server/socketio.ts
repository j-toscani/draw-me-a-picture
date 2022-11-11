import {Socket} from "socket.io";

export default function handleConnect(socket: Socket) {
    console.log("User connected");

    socket.on("message", handleMessage);
    socket.on("disconnect", handleDisconnect);
}

function handleMessage(data: string) {
    console.log("Message recieved:", data);
}

function handleDisconnect() {
    console.log("User disconnected");
}
