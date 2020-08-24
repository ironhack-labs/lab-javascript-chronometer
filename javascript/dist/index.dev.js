"use strict";

var chronometer = new Chronometer(); // get the buttons:

var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight"); // get the DOM elements that will serve us to display the time:

var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splits = document.getElementById("splits");

function printTime() {// ... your code goes here
}

function printMinutes() {// ... your code goes here
}

function printSeconds() {} // ... your code goes here
// ==> BONUS


function printMilliseconds() {// ... your code goes here
}

function printSplit() {// ... your code goes here
}

function clearSplits() {// ... your code goes here
}

function setStopBtn() {// ... your code goes here
}

function setSplitBtn() {// ... your code goes here
}

function setStartBtn() {// ... your code goes here
}

function setResetBtn() {} // ... your code goes here
// Start/Stop Button


btnLeft.addEventListener("click", function () {
  chronometer.startClick();
}); // Reset/Split Button

btnRight.addEventListener("click", function () {// ... your code goes here
});