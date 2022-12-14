export default function drawImageToCanvas(image, canvas) {
  const context = canvas.getContext("2d");
  const { width, height } = normaliseSize(image, canvas);
  const { x, y } = calcCenters(canvas, { width, height });

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, x, y, width, height);

  return context;
}

function calcCenters(canvas, normaliseSizedImage) {
  const { width, height } = normaliseSizedImage;
  const y = Math.floor(canvas.height / 2 - height / 2);
  const x = Math.floor(canvas.width / 2 - width / 2);

  return {
    y,
    x,
  };
}

function normaliseSize(image, canvas) {
  const { width: iWidth, height: iHeight } = image;
  const { width: cWidth, height: cHeight } = canvas;

  const imageApsectRatio = iWidth / iHeight;
  const canvasApsectRatio = cWidth / cHeight;

  // bigger the aspectratio, the longer the image compared to it´s height
  const adjustForHeight = imageApsectRatio < canvasApsectRatio;

  if (adjustForHeight) {
    return {
      height: cHeight,
      width: (iWidth * cHeight) / iHeight,
    };
  } else {
    return {
      width: cWidth,
      height: (iHeight * cWidth) / iWidth,
    };
  }
}
