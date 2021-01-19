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
  let minuteDecimals = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  let minuteUnits = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerText = minuteDecimals;
  minUni.innerText = minuteUnits;
}

function printSeconds() {
  let secondDecimals = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  let secondUnits = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerText = secondDecimals;
  secUni.innerText = secondUnits;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const newSplit = document.createElement("li");
  newSplit.innerText = chronometer.splitClick();
  splits.appendChild = newSplit;
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP";
    chronometer.startClick();
    setInterval(printTime, 1000);
  } else {
    btnLeft.innerText = "START";
    clearInterval(this.currentTime);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  if (btnRight.innerText === "RESET") {
    btnRight.innerText = "SPLIT";
    chronometer.printSplit();
  } else {
    btnRight.innerText = "RESET";
  }
});
