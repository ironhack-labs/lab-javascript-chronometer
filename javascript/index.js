import { Chronometer } from "./chronometer.js";

const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime(evt) {
  //
  return startClick(callback); //?? is this right
}

function printMinutes() {
  return getMinutes();
}

function printSeconds() {
  return getSeconds();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// ITERATION 2: DOM MANIP
// START/STOP Button
// => 2 btn on html :
// 1 btn ID"btnLeft" === class"btn start"
// 1 btn ID"btnRight" === class "btn reset"
// start & clear buttons === chrono is not running
// if chrono is running => "btn start" changes to "btn stop"
// else "btn reset" change to "btn split"

// following the logic of the table
// if chrono's stopped === btnLeft -> textContent "START" class = btn start
// if chrono's stopped === btnRight -> textContent "RESET" class = btn reset
// if chrono's running === btnLeft  -> textContent "STOP" class = btn stop
// if chrono's running === btnRight  -> textContent "SPLIT" class = btn split
// I only see btn start & btn stop on style sheet & inspect/elmts/styles :/
// we have to toggle their classes??? how?

btnLeft.addEventListener("click", () => {
  if (btnLeft.className === 0) {
    // if btnLeft (=btn start) is false -> chrono is running
    chronometer.stopClick(); //(.stopClick(btnLeft.value) ??
    btnLeft.className.textContent = "START";
  } else {
    btnLeft.className === 1;
    chronometer.startClick(); //(btnLeft.value) ??
  }
  btnLeft.className.textContent = "STOP"("btn stop"); // how to set btnLeft w STOP && class btn stop?
});

// Reset/Split Button

btnRight.addEventListener("click", () => {
  if (btnRight.className === 0) {
    chronometer.resetClick(); //(btnLeft.value) ??
    btnLeft.className.textContent = "RESET";
  } else {
    btnLeft.className === 1;
    chronometer.startClick(); //(btnLeft.value) ??
  }
  btnLeft.className.textContent = "SPLIT"("btn split");
});
