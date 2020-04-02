const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const startButton = document.querySelector('.btn.start');
const stopButton = document.querySelector('.btn.stop');
const buttonClass = document.querySelectorAll('.btn');

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
  let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = mins[0];
  minUni.innerHTML = mins[1];
}

function printSeconds() {
  let secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = secs[0];
  secUni.innerHTML = secs[1];
}

// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML === 'START') {
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
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML === "RESET") {
    chronometer.resetClick();
    printTime();
    clearSplits();
  } else {
    chronometer.splitClick();
    printSplit();
  }
});