
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
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milisecondsStr = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds());

  milDecElement.innerText = milisecondsStr[0];
  milUniElement.innerText = milisecondsStr[1];
}

function printSplit() {
  // ... your code goes here
  const newSplit = document.createElement('li');
  newSplit.textContent = chronometer.split();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.textContent = '';
  chronometer.reset();
  printTime();
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.classList.add('stop');
  btnLeftElement.classList.remove('start');
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.classList.add('split');
  btnRightElement.classList.remove('reset');
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'START';
  btnLeftElement.classList.add('start');
  btnLeftElement.classList.remove('stop');
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'RESET';
  btnRightElement.classList.add('reset');
  btnRightElement.classList.remove('split');
}

// Start/Stop Button
  // ... your code goes here
btnLeftElement.addEventListener('click', (event) => {
  const isStartButton = btnLeftElement.classList.contains('start');
  if (isStartButton) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
    
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
    
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  const isResetButton = btnRightElement.classList.contains('reset');
  if (isResetButton ) {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});