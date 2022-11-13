import handleImageLoad from "./handleImageLoad.js";

export default function handleCanvasUpload() {
  const canvas = document.querySelector("canvas");
  const input = document.querySelector('input[type="file"]');

  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    const image = document.createElement("img");
    image.addEventListener("load", handleImageLoad(image, canvas));
    image.src = url;
  });
}