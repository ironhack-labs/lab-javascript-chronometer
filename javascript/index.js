"use strict";
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

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const mins = chronometer.getMinutes();

  const minutes = String(mins).split('');
  if (minutes.length < 2) {
    minutes.unshift('0');
  }
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];

}
function printSeconds() {
  const secs = chronometer.getSeconds();

  const seconds = String(secs).split('');
  if (seconds.length < 2) {
    seconds.unshift('0');
  }
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}
// ==> BONUS
function printMilliseconds() {
  const mls = chronometer.twoDigitsNumber(chronometer.currentMilliseconds);
  const milliseconds = String(mls).split('');
  if (milliseconds.length < 2) {
    milliseconds.unshift('0');
  }
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}
function printSplit() {
  const olObj = document.querySelector("ol");
  const liObj = document.createElement("li");
  liObj.innerHTML = chronometer.splitClick();
  olObj.appendChild(liObj);
}
function clearSplits() {
  const liArray = document.querySelectorAll("li");
  liArray.forEach((li) => { li.remove() });
}
function setStopBtn() {
  chronometer.stopClick();
  btnLeft.innerHTML = "START";
}

function setSplitBtn() {
  printSplit()
}


function setStartBtn() {
  chronometer.startClick(printTime);
  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
}
function setResetBtn() {
  chronometer.resetClick();
  minDec.innerHTML = 0
  minUni.innerHTML = 0
  secDec.innerHTML = 0
  secUni.innerHTML = 0
  milDec.innerHTML = 0
  milUni.innerHTML = 0
}


// Start/Stop Button
btnLeft.addEventListener("click", () => {
  const btnLeftText = btnLeft.innerHTML;
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("split");
  if (btnLeftText === "START") {
    setStartBtn()
    btnRight.innerHTML = "SPLIT";
  } else {
    setStopBtn();
    btnRight.innerHTML = "RESET";

  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  const btnRightText = btnRight.innerHTML;
  if (btnRightText === "SPLIT") {
    printSplit();
  } else {
    setResetBtn();
    clearSplits();

  }
});