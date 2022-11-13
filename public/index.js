import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import handleMessageInput from "./handlers/handleMessageInput.js";
import handleCanvasUpload from "./handlers/handleCanvasUpload.js";
import handleSender from "./handlers/handleSender.js";
import handleMoveToRoom from "./handlers/handleMoveToRoom.js";

const socket = io();
handleMessageInput(socket);
handleCanvasUpload();
handleSender(socket);
socket.on("move-to-room", handleMoveToRoom)
