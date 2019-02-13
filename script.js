"use strict";

let colorWell;
const defaultColor = "#0000ff";
let hexColor = defaultColor;
let selectedCorlorSet = "Monochromatic";

// colorboxes
const box_1 = document.querySelector("#box_1");
const box_2 = document.querySelector("#box_2");
const box_3 = document.querySelector("#box_3");
const box_4 = document.querySelector("#box_4");
const box_5 = document.querySelector("#box_5");

// labels
const box_1_label = document.querySelector("#box_1_label");
const box_2_label = document.querySelector("#box_2_label");
const box_3_label = document.querySelector("#box_3_label");
const box_4_label = document.querySelector("#box_4_label");
const box_5_label = document.querySelector("#box_5_label");

box_1_label.textContent = `hsl(240, 100%, 50%)`;

document.addEventListener("DOMContentLoaded", init, false);

function init() {
  console.log("init run");
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", colorPick, false);
  colorWell.select();
  document
    .querySelector("#selectColorSet")
    .addEventListener("change", corlorSetPicked);
}

function corlorSetPicked() {
  console.log("corlorSetPicked");
  selectedCorlorSet = this.options[this.selectedIndex].value;
  console.log(selectedCorlorSet);
  colorSet();
}

//  - - - - - - - - - - - - - - - colorPick - - - - - - - - - - - - - - -

function colorPick(event) {
  console.log("colorPick run");

  // Get hex color from picker
  hexColor = event.target.value;
  console.log("hexColor is: " + hexColor);

  // hex to rgb
  const rgbValues = hexToRgb(hexColor);

  // split return rgb values to seperate values
  let RgbValuesSplit = rgbValues.split(",");
  console.log(RgbValuesSplit);

  //   single HLS values
  let r = parseInt(RgbValuesSplit[0]);
  let g = parseInt(RgbValuesSplit[1]);
  let b = parseInt(RgbValuesSplit[2]);

  console.log("rgbValues is: " + rgbValues);

  //   rgb to hls
  const hslValues = rgbToHsl(r, g, b);
  console.log(hslValues);

  // setBaseColor();
  setBaseColor(hslValues);
}

//  - - - - - - - - - - - - - - - setBaseColor - - - - - - - - - - - - - - -

function setBaseColor(hsl) {
  console.log("setBaseColor run");
  console.log(hsl);

  //   single HLS values
  console.log(hsl);
  let h = parseInt(hsl.h);
  let s = parseInt(hsl.s);
  let l = parseInt(hsl.l);

  // round to 2 decimals
  h = h.toFixed(2);
  s = s.toFixed(2);
  l = l.toFixed(2);

  // set box_1 background color & label
  let hsl_line_1 = `hsl(${h}, ${s}%, ${l}%)`;
  box_1.style.backgroundColor = hsl_line_1;
  box_1_label.textContent = hsl_line_1;

  // set box_2 background color & label
  let hsl_line_2 = `hsl(${h}, ${s}%, ${l + 10}%)`;
  box_2.style.backgroundColor = hsl_line_2;
  box_2_label.textContent = hsl_line_2;

  // set box_3 background color & label
  let hsl_line_3 = `hsl(${h}, ${s}%, ${l - 10}%)`;
  box_3.style.backgroundColor = hsl_line_3;
  box_3_label.textContent = hsl_line_3;

  // set box_4 background color & label
  let hsl_line_4 = `hsl(${h}, ${s}%, ${l + 20}%)`;
  box_4.style.backgroundColor = hsl_line_4;
  box_4_label.textContent = hsl_line_4;

  // set box_5 background color & label
  let hsl_line_5 = `hsl(${h}, ${s}%, ${l - 20}%)`;
  box_5.style.backgroundColor = hsl_line_5;
  box_5_label.textContent = hsl_line_5;

  colorSet(h, s, l);
}

//  - - - - - - - - - - - - - - - colorSet - - - - - - - - - - - - - - -

function colorSet(h, s, l) {
  console.log("setColor run");
}

//  - - - - - - - - - - - - - - - calculateColors - - - - - - - - - - - - - - -

function calculateColors() {
  console.log("calculateColors run");

  setColor();
}

//  - - - - - - - - - - - - - - - hexToRgb - - - - - - - - - - - - - - -

function hexToRgb(color) {
  console.log("hexToRgb run");
  console.log(color);
  color = color.replace(/[^0-9A-F]/gi, "");
  let bigint = parseInt(color, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  console.log([r, g, b].join());

  return [r, g, b].join();
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