export default function drawOnMove() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const position = canvas.getBoundingClientRect();

  let active = false;
  let path = [];

  canvas.addEventListener("mousedown", (event) => {
    active = true;
    ctx.beginPath();
    ctx.moveTo(...calcClickPosition(event));
    path.push(calcClickPosition(event));
  });

  canvas.addEventListener("mouseleave", () => {
    active = false;
  });

  canvas.addEventListener("mousemove", (event) => {
    if (!active) return;
    drawTo(ctx, calcClickPosition(event));
    path.push(calcClickPosition(event));
  });

  canvas.addEventListener("mouseup", (event) => {
    active = false;
    drawTo(ctx, calcClickPosition(event));

    path.push(calcClickPosition(event));
    path = [];
  });
}

function drawLine(ctx, path) {
  const start = path[0];

  for (let index = 1; index < path.length; index++) {
    drawTo(ctx, path[index]);
  }
}

function drawTo(ctx, coordinates) {
  const [x, y] = coordinates;
  ctx.lineTo(x, y);
  ctx.stroke();
}

function calcClickPosition(clickEvent) {
  return [clickEvent.offsetX, clickEvent.offsetY];
}
