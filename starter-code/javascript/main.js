var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
 if (btnLeft.innerText === "START") {
   chronometer.startClick();
   btnLeft.innerText = "STOP";
   btnLeft.style.backgroundColor = "#f14949";
   } else {
   btnLeft.innerText = "START";
   btnLeft.style.backgroundColor = "#5fca5f";
   chronometer.stopClick();
 }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
 if (btnRight.innerText === "RESET") {
   chronometer.resetClick();
   btnRight.innerText = "SPLIT";
   btnRight.style.backgroundColor = "#0851ab";
 } else {
   btnRight.innerText = "RESET";
   btnRight.style.backgroundColor = "#908e8e";
   chronometer.resetClick();
 }
});