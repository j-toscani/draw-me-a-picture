import {Socket, Server} from "socket.io";

export default function createSocketIo(server: any) {
    const io = new Server(server);
    io.on("connection", handleConnect);
    return io;
}

function handleConnect(socket: Socket) {
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
