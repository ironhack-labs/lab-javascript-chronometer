import {Chronometer} from "./chronometer.js";

const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliSeconds();
}

function printMinutes() {
  const currentTime = chronometer.splitClick();
  minDec.textContent = currentTime[0];
  minUni.textContent = currentTime[1];
}

function printSeconds() {
  const currentTime = chronometer.splitClick();
  secDec.textContent = currentTime[3];
  secUni.textContent = currentTime[4];
}

function printMilliSeconds() {
  const currentTime = chronometer.splitClick();
  milDec.textContent = currentTime[6];
  milUni.textContent = currentTime[7];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const currentSplit = chronometer.splitClick();
  splits.innerHTML += `<li>${currentSplit}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.textContent = "STOP";
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains("start")){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains("reset")){
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});