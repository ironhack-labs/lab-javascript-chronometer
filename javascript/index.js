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
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let twoDigitMin = chronometer.computeTwoDigitNumber(minutes);

  let firstDigitMin = twoDigitMin.toString().charAt(0);
  let secondDigitMin = twoDigitMin.toString().charAt(1);

  minDecElement.textContent = firstDigitMin;
  minUniElement.textContent = secondDigitMin;
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let twoDigitSeg = chronometer.computeTwoDigitNumber(seconds);

  let firstDigitSec = twoDigitSeg.toString().charAt(0);
  let secondDigitSec = twoDigitSeg.toString().charAt(1);

  secDecElement.textContent = firstDigitSec;
  secUniElement.textContent = secondDigitSec;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milliseconds = chronometer.getMilliSeconds()
  let twoDigitMS = chronometer.computeTwoDigitNumber(milliseconds)

  let firstDigitMS = twoDigitMS.toString().charAt(0)
  let secondDigitMS = twoDigitMS.toString().charAt(1)

  milDecElement.textContent =firstDigitMS
  milUniElement.textContent = secondDigitMS 


}

function printSplit() {
  let splited = document.createElement('li');
  splited.classList.add('list-item');
  splited.innerHTML = chronometer.split();

  splitsElement.appendChild(splited);
}

function clearSplits() {
  // ... your code goes here
splitsElement.textContent = ''
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button vwhen clicked, the start button should invoke the chronometer's start method.
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    btnLeftElement.textContent = 'STOP';
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnRightElement.textContent = 'SPLIT';
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
  } else if (btnLeftElement.classList.contains('stop')) {
    chronometer.stop();
    btnLeftElement.textContent = 'START';
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnRightElement.textContent = 'RESET';
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    minDecElement.textContent = 0;
    minUniElement.textContent = 0;
    secDecElement.textContent = 0;
    secUniElement.textContent = 0;
    milDecElement.textContent = 0;
    milUniElement.textContent = 0
    clearSplits();
  } else if (btnRightElement.classList.contains('split')) {
    printSplit();
  }
});
