let file;

export default function handleSender(io) {
    const input = document.querySelector('input[type="file"]');
    const button = document.querySelector("button.sender");

    input.addEventListener("change", (event) => {
        file = event.target.files[0];
    })

    button.addEventListener("click", () => {
        if (!file) {
            alert("No file was uploaded.");
            return;
        }
        io.emit("new-background", file)
    })
}