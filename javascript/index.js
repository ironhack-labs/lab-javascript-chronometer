const chronometer = new Chronometer();

// enumerators

const BTN_TEXT_START = "START";
const BTN_TEXT_RESET = "RESET";

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
// let hourDec = document.getElementById("hourDec");
// let hourUni = document.getElementById("hourUni");
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  // ... your code goes here
  //   printHours();
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printHours() {
  let hours = chronometer.twoDigitsNumber(chronometer.getHours());
  hourDec.innerText = hours[0];
  hourUni.innerText = hours[1];
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milliSeconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.innerText = milliSeconds[0];
  milUni.innerText = milliSeconds[1];
}

function printSplit() {
  // ... your code goes here
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  // ... your code goes here
  chronometer.resetClick();
  splits.innerHTML = "";
  printTime();
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerText = "STOP";
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = "SPLIT";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = "START";
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = "RESET";
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  let isChronometerRunning = btnLeft.innerText === BTN_TEXT_START;
  if (isChronometerRunning) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  let rightBtnClasslist = Array.from(btnRight.classList);
  if (rightBtnClasslist.includes("split")) {
    printSplit();
  } else if (rightBtnClasslist.includes("reset")) {
    clearSplits();
  }
});
