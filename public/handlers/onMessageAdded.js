export default function onMessageAdded(message) {
  const ul = document.querySelector("ul");
  addMessage(ul, message);
}

export function addMessage(ul, message) {
  const li = document.createElement("li");

  li.textContent = message;
  ul.append(li);
}
