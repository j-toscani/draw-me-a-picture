export default function handleImageUpload(input, image, onLoad) {
    input.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);

        image.addEventListener("load", () => onLoad(file));
        image.src = url;
    })
}