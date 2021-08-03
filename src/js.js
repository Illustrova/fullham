import { fabric } from "fabric";
import { draw } from "./common.js";

document.addEventListener("DOMContentLoaded", function (event) {
  // Canvas 2 - js resize
  const canvas2 = new fabric.Canvas("c2", {
    enableRetinaScaling: true,
    renderOnAddRemove: true,
  });

  canvas2.width = window.innerWidth;

  function resizeCanvas(canvas) {
    const widthRatio = window.innerWidth / canvas.width;

    canvas.setZoom(widthRatio);
    canvas.renderAll();
    // },
  }
  window.addEventListener("resize", () => resizeCanvas(canvas2), false);
  draw(canvas2);
  // resize on init
  resizeCanvas(canvas2);

  // setup toggle
  document
    .getElementById("toggleBg")
    .addEventListener("change", (e) => draw(canvas2, e.target.checked));
});
