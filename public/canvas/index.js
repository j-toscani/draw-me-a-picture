import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import handleCanvasImageUpdate from "../handlers/handleCanvasImageUpdate.js";
import fetchRoomImage from "./handlers/fetchRoomImage.js";
import drawAndEmitOnMove, { drawLine } from "./handlers/drawAndEmitOnMove.js";

const socket = io();
const roomId = location.search.slice(1).split("=")[1];

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

socket.emit("join-room", roomId);
socket.on("new-line", (path) => {
    drawLine(ctx, path)
})

drawAndEmitOnMove(socket);
fetchRoomImage(roomId)
