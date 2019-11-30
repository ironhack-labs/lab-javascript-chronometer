var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
let splitList = document.getElementById("splits");

function printTime() {
  return (
    chronometer.twoDigitsNumber(minutes) +
    ":" +
    chronometer.twoDigitsNumber(seconds)
  );
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
}

function printMilliseconds() {}

function printSplit() {
  let listSplit = document.createElement("li");
  listSplit.textContent = chronometer.splitClick();
  splitList.append(listSplit);
}

function clearSplits() {}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.textContent = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
