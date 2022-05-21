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
  const minutes = chronometer.getMinutes();
  const arrayMinutes = minutes.split();

  minUniElement.textContent = arrayMinutes[0];
  minDecElement.textContent = arrayMinutes[1];
}

function printSeconds() {
  const secondes = chronometer.getSeconds();
  const arraySecondes = secondes.split();

  secUniElement.textContent = arraySecondes[0];
  secDecElement.textContent = arraySecondes[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitString = chronometer.split();

  const splitList = document.createElement('li');
  splitList.
  splitList.textContent = chronometer.splitString;
  splitsElement.appendChild(splitList);
}

function clearSplits() {
  splitsElement.replaceChildren();
}

function setStopBtn() {
  btnLeftElement.classList.replace('start', 'stop');
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.replace('reset', 'split');
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.replace('stop', 'start');
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  btnRightElement.classList.replace('slit', 'reset');
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.textContent === 'START') {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    chronometer.stop();
    setResetBtn;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.textContent === 'SPLIT') {
    printSplit();
  } else {
    printTime();
    clearSplits();
  }
});
