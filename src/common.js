import { fabric } from "fabric";

const image = require("../assets/map_screenshot.png");

export const setBackgroundImage = (canvas, image, callback) => {
  const resizeImageToCanvas = () => {
    const img = canvas.backgroundImage;
    img.scaleToWidth(canvas.getWidth());
    canvas.renderAll();
    if (callback) {
      callback();
    }
  };

  canvas.setBackgroundImage(image, resizeImageToCanvas);
};

const addImageToCanvas = (image, canvas) => {
  // Resize image accordingly, if it's width/height overflows canvas size
  const originalWidth = image.width || 0;
  const originalHeight = image.height || 0;
  const canvasWidth = canvas.getWidth();
  const canvasHeight = canvas.getHeight();

  const imageRatio = originalWidth / originalHeight;
  const canvasRatio = canvasWidth / canvasHeight;
  if (imageRatio <= canvasRatio) {
    if (originalHeight > canvasHeight) {
      image.scaleToHeight(canvasHeight);
    }
  } else if (originalWidth > canvasWidth) {
    image.scaleToWidth(canvasWidth);
  }

  canvas.add(image);
  image.moveTo(0);

  canvas.renderAll();
};

export const draw = (canvas, hasBg) => {
  canvas.clear();
  console.log("🚀 ~ file: common.js ~ line 43 ~ draw ~ canvas", canvas);
  if (hasBg) {
    setBackgroundImage(canvas, image);
  } else {
    const img = fabric.Image.fromURL(image, (img) =>
      addImageToCanvas(img, canvas)
    );
  }
  canvas.add(
    new fabric.Rect({
      width: 100,
      height: 100,
      left: 150,
      top: 150,
      fill: "red",
    })
  );
  canvas.add(
    new fabric.Rect({
      width: 50,
      height: 50,
      left: 450,
      top: 250,
      fill: "blue",
    })
  );

  const textbox = new fabric.IText("Lorum ipsum dolor sit amet", {
    left: 200,
    top: 100,
    width: 150,
    fontSize: 20,
    fontFamily: "cursive",
  });
  canvas.add(textbox);
};
