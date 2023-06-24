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
  this.printMinutes();
  this.printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let twoDigitsMinutes = chronometer.computeTwoDigitsNumber(minutes);

  minDec.innerText = twoDigitsMinutes[0];
  minUni.innerText = twoDigitsMinutes[1];
}

function printSeconds() {
  let secs = chronometer.getSeconds();
  let twoDigitsSeconds = chronometer.computeTwoDigitsNumber(secs);

  secDec.innerText = twoDigitsSeconds[0];
  secUni.innerText = twoDigitsSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newElem = document.createElement("li");
  newElem.innerText = chronometer.splitClick();

  splits.appendChild(newElem);
}

function clearSplits() {
  splits.innerHTML = "";
  minDec.innerText = "0";
  minUni.innerText = "0";
  secDec.innerText = "0";
  secUni.innerText = "0";
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";

  chronometer.start(printTime);
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";

  chronometer.split();
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.className = "btn start";

  chronometer.stop();
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText == "START") {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerText == "SPLIT") {
    printSplit();
    chronometer.splitClick();
  } else {
    clearSplits();
    chronometer.resetClick();
  }
});