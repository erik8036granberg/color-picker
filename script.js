"use strict";

let colorWell;
const defaultColor = "#0000ff";

// let colorHarmony = "monochromatic";
// let convertRgbColor;

const box_1 = document.querySelector("#box_1");
const box_2 = document.querySelector("#box_2");
const box_3 = document.querySelector("#box_3");
const box_4 = document.querySelector("#box_4");
const box_5 = document.querySelector("#box_5");

document.addEventListener("DOMContentLoaded", init, false);

function init() {
  console.log("init");
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", colorPick, false);
  colorWell.select();
}

function colorPick(event) {
  console.log("colorPick");

  // Get hex color from picker
  let hexColor = event.target.value;
  console.log("hexcolor is: " + hexColor);

  // hex to rgb
  let rgbColor = hexToRgb(hexColor);
  console.log("rgbColor is: " + rgbColor);

  // setBaseColor();
  setColor(rgbColor);
}

function setBaseColor() {
  console.log("setBaseColor");

  calculateColors();
}

function calculateColors() {
  console.log("calculateColors");

  setColor();
}

function setColor(color) {
  console.log("setColor");

  // set box_1 background color
  box_1.style.backgroundColor = color;
}

function hexToRgb(hex) {
  let x = [];
  hex = hex.replace("#", "");
  if (hex.length != 6) {
    hex = modifyHex(hex);
  }
  x.push(parseInt(hex.slice(0, 2), 16));
  x.push(parseInt(hex.slice(2, 4), 16));
  x.push(parseInt(hex.slice(4, 6), 16));
  return "rgb(" + x.toString() + ")";
}
