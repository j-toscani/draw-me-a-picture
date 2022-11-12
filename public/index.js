import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import handleMessageInput from "./handlers/handleMessageInput.js";
import onMessageAdded from "./handlers/onMessageAdded.js";
import renderHistory from "./handlers/renderHistory.js";
import handleCanvasUpload from "./handlers/handleCanvasUpload.js";

const socket = io();
handleMessageInput(socket);
socket.on("message-added", onMessageAdded);
socket.once("history", renderHistory);
handleCanvasUpload();
