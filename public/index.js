import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import drawImageToCanvas from "./handlers/drawImageToCanvas.js";
import handleCanvasImageUpdate from "./handlers/handleCanvasImageUpdate.js";
import handleImageUpload from "./handlers/handleImageUpload.js";
import drawAndEmitOnMove from "./handlers/drawAndEmitOnMove.js";

const socket = io();

const image = new Image();
const input = document.querySelector('input[type="file"]');
const bgCanvas = document.querySelector("canvas#bg");
const drawCanvas = document.querySelector("canvas#draw");

handleImageUpload(input, image, onImageUpload);
drawAndEmitOnMove(socket, drawCanvas)

socket.on("bgimageupdate", (buffer) => {
  handleCanvasImageUpdate(bgCanvas, buffer);
});

function onImageUpload(file) {
  drawImageToCanvas(image, bgCanvas);
  socket.emit("bgimagedata", file);
}
