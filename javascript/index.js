// const Chronometer = require("./chronometer");

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1];
}

function printSplit() {
  let newLi = document.createElement('li');
  newLi.innerHTML = chronometer.split();
  splitsElement.appendChild(newLi);
}

function clearSplits() {
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'stop btn';
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'split btn';
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'start btn';
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'reset btn';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else if (btnLeftElement.classList.contains('stop')) {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime();
  } else if(btnRight.classList.contains('split')) {
    printSplit();
  }
});
