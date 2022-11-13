import handleImageLoad from "./handleImageLoad";

export default function handleCanvasImageUpdate(buffer) {
  const bufferView = new Uint8Array(buffer);
  const blob = new Blob([bufferView], { type: "image/jpeg" });

  const image = new Image();
  const imageUrl = URL.createObjectURL(blob);
  const canvas = document.querySelector("canvas");

  image.onload = handleImageLoad(image, canvas);

  image.src = imageUrl;
}
