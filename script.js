"use strict";

let colorWell;
let defaultColor = "#0000ff";

window.addEventListener("load", init, false);

const box_1 = document.querySelector("#box_1");
const box_2 = document.querySelector("#box_2");
const box_3 = document.querySelector("#box_3");
const box_4 = document.querySelector("#box_4");
const box_5 = document.querySelector("#box_5");

window.addEventListener("DOMContentLoaded", init, false);

function init() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", colorPick, false);
    colorWell.select();
}

function colorPick(event) {
    let colorTarget = box_1;
    colorTarget.style.backgroundColor = event.target.value;
}