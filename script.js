"use strict";

let colorWell;
let defaultColor = "#0000ff";
let hexColor;

const box_1 = document.querySelector("#box_1");
const box_2 = document.querySelector("#box_2");
const box_3 = document.querySelector("#box_3");
const box_4 = document.querySelector("#box_4");
const box_5 = document.querySelector("#box_5");

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", colorPick, false);
    colorWell.select();

    box_1.addEventListener("click", colorPick);
}

function colorPick(event) {
    // Get color from picker
    console.log("colorPick er:" + event.target.value);
    hexColor = event.target.value;
    setBaseColor();
}

function setBaseColor() {
    box_1.style.backgroundColor = hexColor;
}