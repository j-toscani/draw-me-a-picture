export function handleMessageInput(socket) {
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

export function renderHistory(history) {
  const ul = document.querySelector("ul");
  history.forEach((message) => {
    addMessage(ul, message);
  });
}

export function onMessageAdded(message) {
  const ul = document.querySelector("ul");
  addMessage(ul, message);
}

function addMessage(ul, message) {
  const li = document.createElement("li");

  li.textContent = message;
  ul.append(li);
}
