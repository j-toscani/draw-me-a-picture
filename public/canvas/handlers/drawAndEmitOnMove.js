export default function drawAndEmitOnMove(io) {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  let active = false;
  let path = [];

  canvas.addEventListener("mousedown", (event) => {
    active = true;
    ctx.beginPath();
    ctx.moveTo(...getClickPosition(event));
    path.push(getClickPosition(event));
  });

  canvas.addEventListener("mouseleave", () => {
    active = false;
  });

  canvas.addEventListener("mousemove", (event) => {
    if (!active) return;
    drawTo(ctx, getClickPosition(event));
    path.push(getClickPosition(event));
  });

  canvas.addEventListener("mouseup", (event) => {
    active = false;
    drawTo(ctx, getClickPosition(event));

    path.push(getClickPosition(event));
    io.emit("drew-line", path);
    path = [];
  });
}

export function drawLine(ctx, path) {
  const start = path[0];

  ctx.beginPath();
  ctx.moveTo(...start);

  for (let index = 1; index < path.length; index++) {
    drawTo(ctx, path[index]);
  }
}

function drawTo(ctx, coordinates) {
  const [x, y] = coordinates;
  ctx.lineTo(x, y);
  ctx.stroke();
}

function getClickPosition(clickEvent) {
  return [clickEvent.offsetX, clickEvent.offsetY];
}
