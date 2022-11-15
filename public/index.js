import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import drawImageToCanvas from "./handlers/drawImageToCanvas.js";
import handleCanvasImageUpdate from "./handlers/handleCanvasImageUpdate.js";
import handleImageUpload from "./handlers/handleImageUpload.js";
import drawAndEmitOnMove, { drawLine } from "./handlers/drawAndEmitOnMove.js";

const socket = io();
const bgCanvas = document.querySelector("canvas#bg");
const ctx = document.querySelector("canvas#draw").getContext("2d");

socket.on("bgimageupdate", (buffer) => {
  handleCanvasImageUpdate(bgCanvas, buffer);
});

socket.on("new-line", (path) => drawLine(ctx, path))

socket.on("update-users", (data) => {
  const template = document.querySelector('#display-template');
  const wrapper = document.querySelector('ul');

  wrapper.innerHTML = '';

  data.forEach(({color, name}) => {
    const clone = template.content.cloneNode(true);
    const nameSpan = clone.querySelector('span.name');
    const colorSpan = clone.querySelector('span.color');

    nameSpan.innerText = name;
    colorSpan.style["background-color"] = color;

    wrapper.append(clone);
  })
});
