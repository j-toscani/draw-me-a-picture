import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import handleMessageInput from "./handlers/handleMessageInput.js";
import handleCanvasUpload from "./handlers/handleCanvasUpload.js";
import handleSender from "./handlers/handleSender.js";
import handleCanvasImageUpdate from "./handlers/handleCanvasImageUpdate.js";

const socket = io();
handleMessageInput(socket);
socket.on("update-canvas-img", handleCanvasImageUpdate)
handleCanvasUpload();
handleSender(socket);
