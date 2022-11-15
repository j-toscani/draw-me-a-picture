export default function drawAndEmitOnMove(io, canvas, ctx) {
  let active = false;
  let path = [];
  const getClickPosition = calcClickPosition(canvas);

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

function calcClickPosition(canvas) {
  const { width: cWidth, height: cHeight } = canvas;
  const getSize = () => canvas.getBoundingClientRect();

  return (clickEvent) => {
    const { width, height } = getSize();

    const xRatio = cWidth / width;
    const yRatio = cHeight / height;

    return [clickEvent.offsetX * xRatio, clickEvent.offsetY * yRatio];
  };
}
