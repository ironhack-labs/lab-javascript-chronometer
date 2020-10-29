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
  printSeconds(chronometer.getSeconds());
  printMinutes(chronometer.getMinutes());
}

function printMinutes(minutes) {
  minDec.textContent = parseInt(minutes / 10);
  minUni.textContent = minutes % 10;
}

function printSeconds(seconds) {
  secDec.textContent = parseInt(seconds / 10);
  secUni.textContent = seconds % 10;
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
  btnLeft.textContent = "STOP";
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setResetBtn() {
  btnRight.textContent = "RESET";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("split")) {
    printSplit();
  } else {
    clearSplits();
    chronometer.resetClick();
  }
});
