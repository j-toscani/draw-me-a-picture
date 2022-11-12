export default function handleMessageInput(socket) {
  const input = document.querySelector("input");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const value = input.value;

    if (value) {
      socket.emit("message", value);
      input.value = "";
    }
  });
}
