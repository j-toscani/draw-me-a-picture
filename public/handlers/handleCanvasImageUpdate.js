import drawImageToCanvas from "./drawImageToCanvas.js";

export default function handleCanvasImageUpdate(canvas, buffer) {
  if (!buffer) {
    return;
  }
  
  const bufferView = new Uint8Array(buffer);
  const blob = new Blob([bufferView], { type: "image/jpeg" });

  const image = new Image();
  const imageUrl = URL.createObjectURL(blob);

  image.onload = () => drawImageToCanvas(image, canvas);

  image.src = imageUrl;
}
