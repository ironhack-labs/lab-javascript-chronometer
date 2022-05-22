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
  if (chronometer.intervalId === null) {
    btnLeftElement.innerText = 'STOP'
    btnRightElement.innerText = 'SPLIT'
    btnLeftElement.classList.add('stop')
    btnLeftElement.classList.remove('start')
    btnRightElement.classList.add('split')
    btnRightElement.classList.remove('reset')
    chronometer.start()
  } else {
    btnLeftElement.innerText = 'START'
    btnRightElement.innerText = 'RESET'
    btnLeftElement.classList.add('start')
    btnLeftElement.classList.remove('stop')
    btnRightElement.classList.add('reset')
    btnRightElement.classList.remove('split')
    chronometer.stop()
  }
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
