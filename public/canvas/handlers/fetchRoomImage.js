import handleCanvasImageUpdate from "../../handlers/handleCanvasImageUpdate.js";

export default function fetchRoomImage(id) {
  fetch(`/rooms/${id}`)
    .then(async (response) => {
      return await response.arrayBuffer();
    })
    .then(handleCanvasImageUpdate)
    .catch((error) => console.error(error));
}
