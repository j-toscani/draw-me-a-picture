let file;

export default function handleSender(io) {
  const fileInput = document.querySelector('input[type="file"]');
  const textinput = document.querySelector('input[type="text"]');
  const form = document.querySelector("form");

  fileInput.addEventListener("change", (event) => {
    file = event.target.files[0];
  });

  form.addEventListener("submit", handleSubmit(io));
}

function handleSubmit(io) {
  return (event) => {
    event.preventDefault();
    const room = event.target[0].value;

    if (!file) {
      alert("No file was uploaded.");
      return;
    }

    if (!event.target.reportValidity()) {
      return;
    }

    io.emit("create-room", { file, room });
  };
}
