import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import handleCanvasImageUpdate from "./handlers/handleCanvasImageUpdate.js";
import { drawLine } from "./handlers/drawAndEmitOnMove.js";

const socket = io();
const bgCanvas = document.querySelector("canvas#bg");
const drawCanvas = document.querySelector("canvas#draw");
const ctx = drawCanvas.getContext("2d");

socket.on("bgimageupdate", (buffer) => {
  handleCanvasImageUpdate(bgCanvas, buffer);
});
socket.on("clear-draw-canvas", () => {
  ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
});
socket.on("new-line-color", (color) => {
  ctx.strokeStyle = color;
});

socket.on("new-line", (path) => drawLine(ctx, path));
