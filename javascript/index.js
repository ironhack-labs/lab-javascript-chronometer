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
  // ==> BONUS
  printMilliseconds();
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
  // ... your code goes here
}

function printSplit() {
  const splitTime = chronometer.split();
  const splitItem = document.createElement('li');
  splitItem.textContent = splitTime;
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
}

function setSplitBtn() {
  if (chronometer.intervalId) {
    printSplit();
  }
}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
}

function setResetBtn() {
  chronometer.reset();
  printTime();
  clearSplits();
}

btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});