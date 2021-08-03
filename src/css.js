import { fabric } from "fabric";
import { draw } from "./common";

document.addEventListener("DOMContentLoaded", function (event) {
  // Canvas 1
  const canvas = new fabric.Canvas("c", {
    enableRetinaScaling: true,
    renderOnAddRemove: true,
  });
  draw(canvas, true);
});
