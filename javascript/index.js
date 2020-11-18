const chrono = new Chronometer();

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
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  if (minUni.textContent < 10) {
    minDec.textContent = 0;
    minUni.textContent = chrono.getMinutes();
  } else {
    let firstDigit = String(chrono.getMinutes());
    let secondDigit = String(chrono.getMinutes());
    minDec.textContent = firstDigit.slice(0, 1);
    minUni.textContent = secondDigit.slice(1, 2);
  }
}

function printSeconds() {
  if (chrono.getSeconds() < 10) {
    secDec.textContent = 0;
    secUni.textContent = chrono.getSeconds();
  } else {
    let firstDigit = String(chrono.getSeconds());
    let secondDigit = String(chrono.getSeconds());
    secDec.textContent = firstDigit.slice(0, 1);
    secUni.textContent = secondDigit.slice(1, 2);
  }
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {}

function clearSplits() {
  if (btnLeft.class === "stop") [];
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
  if (btnLeft.textContent === "START") {
    btnLeft.textContent = "STOP";
    btnRight.classList.toggle("split");
    btnRight.classList.toggle("reset");
    btnRight.textContent = "SPLIT";
    chrono.startClick(printTime());
  } else {
    btnLeft.textContent = "START";
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    btnRight.textContent = "RESET";
    chrono.stopClick(printTime());
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.textContent === "SPLIT") {
    chrono.printSplit();
  }
});

//
