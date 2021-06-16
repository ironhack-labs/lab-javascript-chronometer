// const Chronometer = require('../javascript/chronometer');

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
  printMinutes();
  printSeconds();
  // ... your code goes here
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  const twoDigitMinutes = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.innerText = twoDigitMinutes.charAt(0); // ou igual array [0]
  minUniElement.innerText = twoDigitMinutes[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const twoDigitSeconds = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.innerText = twoDigitSeconds.charAt(0); // ou igual array [0]
  secUniElement.innerText = twoDigitSeconds[1];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement('li');
  li.innerHTML = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerText = 'CLEAR';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
  //toogle, remove + add, ou mudar a class direto com className = '...'
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
} 

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
