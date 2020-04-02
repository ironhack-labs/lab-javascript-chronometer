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
  let mins = String(chronometer.twoDigitsNumber(chronometer.getMinutes()));
  minDec.innerHTML = mins[0];
  minUni.innerHTML = mins[1];
}

function printSeconds() {
  let secs = String(chronometer.twoDigitsNumber(chronometer.getSeconds()));
  secDec.innerHTML = secs[0];
  secUni.innerHTML = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.replace("start", "stop");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.replace("reset", "split");
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.replace("stop", "start");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.replace("split", "reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerHTML === "START") {
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
btnRight.addEventListener("click", () => {
  if (btnRight.innerHTML === "SPLIT") {
    printSplit();
  } else {
    clearSplits();
    chronometer.currentTime = 0;
    chronometer.intervalId = 0;
    printSeconds();
    printMinutes();
  }
});
