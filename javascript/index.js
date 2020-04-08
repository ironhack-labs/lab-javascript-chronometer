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
    printSeconds();
    printMinutes();
}

function printMinutes() {
  if (chronometer.getMinutes() >= 10) {
    minUni.innerHTML = chronometer.getMinutes().toString().slice(-1);
    minDec.innerHTML = chronometer.getMinutes().toString().slice(-2, -1);
  } else minUni.innerHTML = chronometer.getMinutes();
}

// seems backwards to me to split the units into
// unit and dec digits, since we are asked to create
// twoDigitsNumber() inside chronometer.js
// now we have to splice it back to a single digit
// easier would be to span both html elements into a single 2digit number
function printSeconds() {
  if (chronometer.getSeconds() >= 10) {
    secUni.innerHTML = chronometer.getSeconds().toString().slice(-1);
    secDec.innerHTML = chronometer.getSeconds().toString().slice(-2, -1);
  } else {
    secDec.innerHTML = 0;
    secUni.innerHTML = chronometer.getSeconds();
  }
}

function printMilliseconds() {
  if (chronometer.currentMilliseconds >= 10) {
    milUni.innerHTML = chronometer.currentMilliseconds.toString().slice(-1);
    milDec.innerHTML = chronometer.currentMilliseconds.toString().slice(-2, -1);
  } else {
    milDec.innerHTML = 0;
    milUni.innerHTML = chronometer.currentMilliseconds;
  }


  let milliseconds = chronometer.twoDigitsNumber(
    chronometer.currentMilliseconds
  );
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}

function printSplit() {
  let newSplitTime = document.createElement(`li`);
  newSplitTime.innerHTML = chronometer.splitClick();
  splits.appendChild(newSplitTime);
}

function clearSplits() {
  splits.innerHTML = ``;
}

function clearDisplay() {
  minDec.innerHTML = "0";
  minUni.innerHTML = "0";
  secDec.innerHTML = "0";
  secUni.innerHTML = "0";
  milDec.innerHTML = "0";
  milUni.innerHTML = "0";
}

function setResetBtn() {
  btnRight.innerHTML = `RESET`;
  btnRight.className = "btn reset";
}

function setSplitBtn() {
  btnRight.innerHTML = `SPLIT`;
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML = `START`;
  btnLeft.className = "btn start";
}

function setStopBtn() {
  btnLeft.innerHTML = `STOP`;
  btnLeft.className = "btn stop";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.className.includes(`start`)) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime,printMilliseconds);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnLeft.className.includes(`start`)) {
    setResetBtn();
    chronometer.resetClick();
    clearSplits();
    clearDisplay();
  } else {
    setSplitBtn();
    printSplit();
  }
});
