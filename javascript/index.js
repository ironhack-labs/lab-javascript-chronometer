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
  minUni.innerText = min[1];
  minDec.innerText = min[0];
}

function printSeconds() {
  const sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerText = sec[1];
  secDec.innerText = sec[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = document.createElement('ul');
  split.innerText = chronometer.splitClick();
  splits.appendChild(split);
}

function clearSplits() {
  splits.innerHTML = '';}

function setStopBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerText = 'START';
  btnRight.className = 'btn reset';
  btnRight.innerText = 'RESET';
  chronometer.stopClick();
}

function setStartBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerText = 'STOP';
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT';
  chronometer.startClick();
}

function setResetBtn() {
  clearSplits();
  chronometer.resetClick();
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  let printChrono;
  if (btnLeft.className === 'btn start') {
    setStartBtn();

    printChrono = setInterval(() => printTime(), 1000);
  } else {
    setStopBtn();

    clearInterval(printChrono);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === 'btn reset') {
    setResetBtn();
  } else {
    printSplit();
  }
});
