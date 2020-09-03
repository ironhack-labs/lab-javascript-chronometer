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
  minDec.innerHTML = printMinutes()[0];
  minUni.innerHTML = printMinutes()[1];
  secDec.innerHTML = printSeconds()[0];
  secUni.innerHTML = printSeconds()[1];
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
    btnLeft.textContent = "STOP";
    btnRight.textContent = "SPLIT";
    btnRight.classList.toggle("split");
    btnRight.classList.toggle("reset");
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
    btnLeft.textContent = "START";
    btnRight.textContent = "RESET";
    btnRight.classList.toggle("split");
    btnRight.classList.toggle("reset");
}

function setResetBtn() {
  chronometer.resetClick();
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime);
    setStopBtn()  
  } else {
    setStartBtn();
    chronometer.stopClick();
  }
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  btnRight.classList.contains("reset") ?
    setResetBtn():
    setSplitBtn();
});


