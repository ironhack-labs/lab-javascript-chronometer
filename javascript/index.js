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
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splitsElement.innerHTML = printMinutes(), printSeconds()
  chronometer.split()
}

function clearSplits() {
  chronometer.reset()
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP'
  btnLeftElement.setAttribute ('class','btn stop')
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT'
  btnRightElement.setAttribute ('class', 'btn split')
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START'
  btnLeftElement.setAttribute ('class','btn start')
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET'
  btnRightElement.setAttribute ('class','btn reset')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'STOP' ) {
    setStartBtn();
    chronometer.stop()
  } else {
    setStopBtn()
    chronometer.start(printTime)
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET' ) {
    setSplitBtn()
    clearSplits()
  } else {
    setResetBtn()
    chronometer.reset()
  }
});
