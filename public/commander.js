import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import drawImageToCanvas from "./handlers/drawImageToCanvas.js";
import handleCanvasImageUpdate from "./handlers/handleCanvasImageUpdate.js";
import handleImageUpload from "./handlers/handleImageUpload.js";
import drawAndEmitOnMove from "./handlers/drawAndEmitOnMove.js";
import renderColorDisplay from "./renderColorDisplay.js";

const socket = io();

const image = new Image();
const button = document.querySelector("button");
const input = document.querySelector('input[type="file"]');
const bgCanvas = document.querySelector("canvas#bg");
const drawCanvas = document.querySelector("canvas#draw");
const ctx = drawCanvas.getContext("2d");

handleImageUpload(input, image, onImageUpload);
drawAndEmitOnMove(socket, drawCanvas, ctx);

button.addEventListener("click", () => {
  ctx.clearRect(0, 0, drawCanvas.clientWidth, drawCanvas.height);
  socket.emit("clear-canvas", null);
});
socket.on("bgimageupdate", (buffer) => {
  handleCanvasImageUpdate(bgCanvas, buffer);
});

renderColorDisplay(ctx, socket);

function onImageUpload(file) {
  drawImageToCanvas(image, bgCanvas);
  socket.emit("bgimagedata", file);
}
