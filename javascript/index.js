/*jshint esversion: 6 */
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
  const min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  const minUni = document.getElementById('minUni');
  const minDec = document.getElementById('minDec');
  minUni.innerText = min[1];
  minDec.innerText = min[0];
}

function printSeconds() {
  const sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  const secUni = document.getElementById('secUni');
  const secDec = document.getElementById('secDec');
  secUni.innerText = sec[1];
  secDec.innerText = sec[0];
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
  btnLeft.className = 'btn start';
  btnLeft.innerText = 'START';
  btnRight.className = 'btn reset';
  btnRight.innerText = 'RESET';
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerText = 'STOP';
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT';
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === 'btn start') {
    setStartBtn();
    chronometer.startClick();
    const printChrono = setInterval(() => printTime(), 1000);
  } else {
    setStopBtn();
    chronometer.stopClick();
    clearInterval(chronometer);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {});
