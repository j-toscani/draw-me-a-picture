const users = [
  { name: "Mike", color: "#ffc0cb" },
  { name: "Flo", color: "#0000ff" },
  { name: "Armin", color: "#ff0000" },
  { name: "Tosco", color: "#ffff00" },
  { name: "Julian", color: "#ffffff" },
];

export default function renderColorDisplay(context, io) {
  const template = document.querySelector("#display-template");
  const select = document.querySelector("select")
  const wrapper = document.querySelector("ul");

  users.forEach(({ color, name }) => {
    const clone = template.content.cloneNode(true);
    const nameSpan = clone.querySelector("span.name");
    const colorSpan = clone.querySelector("span.color");

    nameSpan.innerText = name;
    colorSpan.style["background-color"] = color;

    wrapper.append(clone);

    const option = document.createElement('option');

    option.textContent = name;
    option.value = color;
    select.append(option);
  });

  select.addEventListener("change", (event) => {
    context.strokeStyle = event.target.value;
    io.emit("change-color", event.target.value);
  })
}
