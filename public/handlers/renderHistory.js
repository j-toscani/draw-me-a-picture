export default function renderHistory(history) {
    const ul = document.querySelector("ul");
    history.forEach((message) => {
      addMessage(ul, message);
    });
  }