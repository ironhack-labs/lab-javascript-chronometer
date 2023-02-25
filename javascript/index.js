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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

function printSplit() {
  const splitTime = chronometer.split();
  const splitLi = document.createElement('li');
  splitLi.textContent = splitTime;
  splitsElement.appendChild(splitLi);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.replace('stop', 'start');
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.replace('split', 'reset');
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.start(printTime, printMilliseconds);
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.replace('start', 'stop');
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.replace('reset', 'split');
}

function setResetBtn() {
  chronometer.reset();
  clearSplits();
  printTime();
  printMilliseconds();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
