"use strict";

let colorWell;
const defaultColor = "#0000ff";
let colorHarmony = "monochromatic";
let hexColor;

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

    // Get color from picker
    hexColor = event.target.value;
    console.log("hexColor");

    setBaseColor();
}

function setBaseColor() {
    console.log("setBaseColor");

    calculateColors();
}

function calculateColors() {
    console.log("calculateColors");

    setColor();
}

function setColor() {
    console.log("setColor");
    box_1.style.backgroundColor = hexColor;
}

function hexToRgb() {

}