var chronometer = new Chronometer(printMinutes);
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes(min) {
  minDec.innerText = min[0];
  minUni.innerText = min[1];
}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {
  btnLeft.innerText = "stop!";
  btnLeft.onclick = setStopBtn;
  btnRight.onclick = setResetBtn;
  start = new Date();
  chronometer.startClick();
}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
