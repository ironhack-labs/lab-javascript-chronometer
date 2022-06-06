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
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let listItem = document.createElement('li');
  listItem.innerHTML = chronometer.split();
  splitsElement.appendChild(listItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
  chronometer.reset();
  printTime();
}

function setStopBtn() {
  chronometer.start(printTime);
  btnLeftElement.innerText = 'STOP';
  btnRightElement.innerText = 'SPLIT';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
}

function setSplitBtn() {
  chronometer.split();
}

function setStartBtn() {
  chronometer.stop();
  btnLeftElement.innerText = 'START';
  btnRightElement.innerText = 'RESET';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

function setResetBtn() {
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // Left Button events
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
  } else if (btnLeftElement.classList.contains('stop')) {
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // Right Button events
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else {
    setResetBtn();
  }
});
