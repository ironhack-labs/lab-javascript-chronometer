const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.getMinutes()}:${chronometer.getSeconds()}</li>`;
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
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
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
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML.includes("START")) {
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
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML.includes("RESET")) {
    clearSplits();
    chronometer.resetClick();
  } else {
    printSplit();
  }
});