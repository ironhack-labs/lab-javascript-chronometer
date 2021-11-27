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
}

function printMinutes() {
  minDecElement.textContent = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];

  minUniElement.textContent = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
}

function printSeconds() {
  secDecElement.textContent = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];

  secUniElement.textContent = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
}

// ==> BONUS
function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    btnLeftElement.textContent = 'STOP';
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnRightElement.classList.add('split');
    btnRightElement.textContent = 'SPLIT';
  } else {
    chronometer.stop();
    btnLeftElement.classList.toggle('stop');
    btnLeftElement.classList.toggle('start');
    btnLeftElement.textContent = 'START';
    btnRightElement.classList.remove('split');
    btnRightElement.textContent = 'RESET';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // Chronometer.stop();
});
