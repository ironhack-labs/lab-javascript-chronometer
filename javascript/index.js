const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// btnLeftElement.addEventListener('click' => {})

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop'
  btnLeftElement.textContent = 'STOP'
}

function setSplitBtn() {
  btnRightElement.className = 'btn split'
  btnRightElement, textContent = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.className = 'btn start'
  btnLeftElement.textContent = 'START'
}

function setResetBtn() {
  btnRightElement.className = 'btn reset'
  btnRightElement.textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    btnLeftElement.classList === 'btn stop'
  }
  if (btnLeftElement.className === 'btn stop') {
    btnLeftElement.className === 'btn start'
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn reset') {
    btnLeftElement.classList === 'btn split'
  }
  if (btnLeftElement.className === 'btn split') {
    btnLeftElement.className === 'btn reset'
  }
});
