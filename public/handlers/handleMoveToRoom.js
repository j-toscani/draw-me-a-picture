export default function moveToRoom(id) {
  const url = new URL(window.location + "canvas/");
  url.searchParams.set("room", id);
  location.assign(url);
}
