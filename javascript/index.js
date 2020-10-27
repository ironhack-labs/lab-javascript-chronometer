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
  printMilliseconds();
}
function printMinutes() {
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  milUni.innerText = chronometer.twoDigitsNumber(
    chronometer.getMilliseconds()
  )[1];
  milDec.innerText = chronometer.twoDigitsNumber(
    chronometer.getMilliseconds()
  )[0];
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
  chronometer.resetClick();
}

function setStopBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
  btnLeft.innerText = "START";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  btnRight.innerText = "RESET";
  chronometer.stopClick();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
  btnLeft.innerText = "STOP";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  btnRight.innerText = "SPLIT";
  chronometer.startClick(printTime);
}

function setResetBtn() {
  minUni.innerText = 0;
  minDec.innerText = 0;
  secUni.innerText = 0;
  secDec.innerText = 0;
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {
    setResetBtn();
  } else {
    printSplit();
  }
});
