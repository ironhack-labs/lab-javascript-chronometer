const chronometer = new Chronometer();

let clockRunning = 0;

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
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  let minutes = String(chronometer.getMinutes()).padStart(2, "0");
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
}

function printSeconds() {
  let seconds = String(chronometer.getSeconds()).padStart(2, "0");
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliSeconds = String(chronometer.getMilliseconds()).padStart(2, "0");
  milDec.textContent = milliSeconds[milliSeconds.length - 1];
  milUni.textContent = milliSeconds[milliSeconds.length - 2];
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  chronometer.resetClick();
  printTime();
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.textContent = "STOP";
  btnLeft.classList.add("stop");
  btnLeft.classList.remove("start");
  clockRunning = 1;
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.classList.add("split");
  btnRight.classList.remove("reset");
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
  clockRunning = 0;
}

function setResetBtn() {
  btnRight.textContent = "RESET";
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (!clockIsRunning(btnLeft)) {
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
  if (!clockIsRunning(btnLeft)) {
    clearSplits();
  } else {
    printSplit();
  }
});

function clockIsRunning(btnLeft) {
  return btnLeft.textContent == "STOP" ? true : false;
}
