"use strict";

let colorWell;
const defaultColor = "#0000ff";
let hexColor = defaultColor;
let selectedColorSet = "Monochromatic";

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
let startColor = {
  h: 240,
  s: 100,
  l: 50
};
setBaseColor(startColor);
colorSet(startColor);

document.addEventListener("DOMContentLoaded", init, false);

function init() {
  console.log("init run");
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", colorPick, false);
  colorWell.select();
  document
    .querySelector("#selectColorSet")
    .addEventListener("change", colorSetPicked);
}

//  - - - - - - - - - - - - - - - colorPick - - - - - - - - - - - - - - -

function colorPick(event) {
  console.log("colorPick run");

  // Get hex color from picker
  hexColor = event.target.value;
  console.log("hexColor is: " + hexColor);

  // hex to rgb
  const rgbColor = hexToRgb(hexColor);

  //   rgb to hsl
  const hslColor = rgbToHsl(rgbColor);
  console.log(hslColor);

  // setColor();
  colorSet(hslColor);
}

//  - - - - - - - - - - - - - - - get colorSet values from select - - - - - - - - - - - - - - -

function colorSetPicked() {
  console.log("corlorSetPicked");

  selectedColorSet = this.options[this.selectedIndex].value;
  console.log(selectedColorSet);
  colorSet(selectedColorSet);
}

//  - - - - - - - - - - - - - - - colorSet - - - - - - - - - - - - - - -

function colorSet(hslColor) {
  console.log("setColor run");




  Monochromatic(hslColor);

}

//  - - - - - - - - - - - - - - - Monochromatic - - - - - - - - - - - - - - -

function Monochromatic(hslColor) {
  console.log("Monochromatic run");

  //   single HLS values + round to 2 decimals
  console.log(hslColor);
  let h = hslColor.h.toFixed(0);
  let s = hslColor.s.toFixed(0);
  let l = hslColor.l.toFixed(0);

  let color_1 = `HSL(${h},${s}%,${l}%)`;
  let color_2 = `HSL(${h},${s}%,${parseInt(l) + 10}%)`;
  let color_3 = `HSL(${h},${s}%,${parseInt(l) - 10}%)`;
  let color_4 = `HSL(${h},${s}%,${parseInt(l) + 20}%)`;
  let color_5 = `HSL(${h},${s}%,${parseInt(l) - 20}%)`;

  setBaseColor(color_1, color_2, color_3, color_4, color_5);
}

//  - - - - - - - - - - - - - - - setBaseColor - - - - - - - - - - - - - - -

function setBaseColor(color_1, color_2, color_3, color_4, color_5) {
  console.log("setBaseColor run");

  // distribute colors to fields
  setBox_1(color_1);
  setBox_2(color_2);
  setBox_3(color_3);
  setBox_4(color_4);
  setBox_5(color_5);
}

// set box_1 background color & label
function setBox_1(color_1) {
  let color = color_1;
  box_1.style.backgroundColor = color;
  box_1_label.textContent = color;
}

// set box_2 background color & label
function setBox_2(color_2) {
  let color = color_2;
  box_2.style.backgroundColor = color;
  box_2_label.textContent = color;
}

// set box_3 background color & label
function setBox_3(color_3) {
  let color = color_3;
  box_3.style.backgroundColor = color;
  box_3_label.textContent = color;
}

// set box_4 background color & label
function setBox_4(color_4) {
  let color = color_4;
  box_4.style.backgroundColor = color;
  box_4_label.textContent = color;
}

// set box_5 background color & label
function setBox_5(color_5) {
  let color = color_5;
  box_5.style.backgroundColor = color;
  box_5_label.textContent = color;
}

//  - - - - - - - - - - - - - - - hexToRgb - - - - - - - - - - - - - - -

function hexToRgb(hexColor) {
  console.log("hexColor to rgb");

  let subString1 = hexColor.substring(1, 3);
  let subString2 = hexColor.substring(3, 5);
  let subString3 = hexColor.substring(5, 7);

  console.log(subString1, subString2, subString3);

  let r = parseInt(subString1, 16);
  let g = parseInt(subString2, 16);
  let b = parseInt(subString3, 16);
  console.log(r, g, b);

  return {
    r,
    g,
    b
  };
}

//  - - - - - - - - - - - - - - - rgbToHsl - - - - - - - - - - - - - - -

function rgbToHsl(rgbColor) {
  console.log("rgbToHsl run");

  let r = rgbColor.r;
  let g = rgbColor.g;
  let b = rgbColor.b;

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