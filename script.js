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
  console.log("init run");
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", colorPick, false);
  colorWell.select();
}

//  - - - - - - - - - - - - - - - colorPick - - - - - - - - - - - - - - -

function colorPick(event) {
  console.log("colorPick run");

  // Get hex color from picker
  const hexColor = event.target.value;
  console.log("hexcolor is: " + hexColor);

  // hex to rgb
  const rgbValues = hexToRgb(hexColor);

  // split return rgb values to seperate values
  let RgbValuesSplit = rgbValues.split(",");
  console.log(RgbValuesSplit);
  let r = parseInt(RgbValuesSplit[0]);
  let g = parseInt(RgbValuesSplit[1]);
  let b = parseInt(RgbValuesSplit[2]);

  console.log("rgbValues is: " + rgbValues);

  //   rgb values to string
  const rgbColor = rgbValuesToString(r, g, b);

  //   rgb to hls
  const hslValues = rgbToHsl(r, g, b);
  console.log("hslValues is: " + hslValues);

  // setBaseColor();
  setColor(rgbColor);
}

//  - - - - - - - - - - - - - - - setBaseColor - - - - - - - - - - - - - - -

function setBaseColor() {
  console.log("setBaseColor run");

  calculateColors();
}

//  - - - - - - - - - - - - - - - calculateColors - - - - - - - - - - - - - - -

function calculateColors() {
  console.log("calculateColors run");

  setColor();
}

//  - - - - - - - - - - - - - - - setColor - - - - - - - - - - - - - - -

function setColor(color) {
  console.log("setColor run");

  // set box_1 background color
  box_1.style.backgroundColor = color;
}

//  - - - - - - - - - - - - - - - hexToRgb - - - - - - - - - - - - - - -

function hexToRgb(color) {
  console.log("hexToRgb run");
  color = color.replace(/[^0-9A-F]/gi, "");
  let bigint = parseInt(color, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  console.log([r, g, b].join());

  return [r, g, b].join();
}

//  - - - - - - - - - - - - - - - rgbValuesToString - - - - - - - - - - - - - - -

// rgb values to string
function rgbValuesToString(r, g, b) {
  console.log("rgbValuesToString run");
  let rgbString = `rgb(${r},${g},${b})`;
  console.log("rgbString is: " + rgbString);
  //   setColor(rgbString);
}

//  - - - - - - - - - - - - - - - rgbToHsl - - - - - - - - - - - - - - -

function rgbToHsl(r, g, b) {
  console.log("rgbToHsl run");
  r /= 255;
  g /= 255;
  b /= 255;
  let h, s, l;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }
  if (h < 0) {
    h = h + 360;
  }
  l = (min + max) / 2;
  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  return {
    h,
    s,
    l
  };
}