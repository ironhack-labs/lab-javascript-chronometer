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
  const printMins = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.textContent = printMins[0]
  minUniElement.textContent = printMins[1]
}

function printSeconds() {
  const printSecs = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.textContent = printSecs[0]
  secUniElement.textContent = printSecs[1]

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

}

function clearSplits() {
 

}

function setStopBtn() {
  
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
  if (btnLeftElement.classList.value === 'btn start') {
    btnLeftElement.classList = 'btn stop'
    btnLeftElement.textContent = 'STOP'
    btnRightElement.classList = 'btn split'
    btnRightElement.textContent = 'SPLIT'

    chronometer.start(printTime)
  } else {
    btnLeftElement.classList = 'btn start'
    btnLeftElement.textContent = 'START'
    btnRightElement.classList = 'btn reset'
    btnRightElement.textContent = 'RESET'

    chronometer.stop()
  }
});

// Reset/Split Button
  btnRightElement.addEventListener('click', () => {
    reset();
});
