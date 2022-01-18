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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  const minUni = chronometer.computeTwoDigitNumber(getSeconds())[1]
  const minDec = chronometer.computeTwoDigitNumber(getMinutes())[0]

  minDecElement = minDec
  minUniElement = minDec
}

function printSeconds() {
  const secDec = chronometer.computeTwoDigitNumber(getSeconds())
  const secUni = chronometer.computeTwoDigitNumber(getSeconds())

  secDecElement = secDec
  minUniElement = minUni

  console.log(secDecElement)
}

printSeconds()
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

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    btnLeftElement.innerText = 'STOP'
    btnLeftElement.classList.replace('start', 'stop')
    btnRightElement.innerText = 'SPLIT'
    btnRightElement.classList.replace('reset', 'split')
  } else {
    btnLeftElement.innerText = 'START'
    btnLeftElement.classList.replace('stop', 'start')
    btnRightElement.innerText = 'RESET'
    btnRightElement.classList.replace('split', 'reset')
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

});
