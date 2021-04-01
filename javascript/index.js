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
  const split = document.createElement('li');
  split.innerText = chronometer.splitClick();
  splits.appendChild(split);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.classList.toggle('stop');
}

function setSplitBtn() {
  btnRight.classList.toggle('split');
}

function setStartBtn() {
  btnLeft.classList.toggle('start');
}

function setResetBtn() {
  btnRight.classList.toggle('reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  setStopBtn();
  setSplitBtn();
  setStartBtn();
  setResetBtn();
  if (btnLeft.classList[1] === ('stop')) {
    btnLeft.innerText = 'STOP';
    btnRight.innerText = 'SPLIT';
    chronometer.startClick(printTime);
  } else {
    btnLeft.innerText = 'START';
    btnRight.innerText = 'RESET';
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList[1] === ('split')) {
    printSplit();
  } else {
    chronometer.resetClick();
    printTime();
    clearSplits();
  }
});