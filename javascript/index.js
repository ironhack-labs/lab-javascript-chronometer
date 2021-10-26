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
  setInterval(() => {
    printMinutes()
    printSeconds()
  }, 1000)
}

function printMinutes() {
  let mins = `${chronometer.getMinutes()}`
  if (mins.length === 2) {
    minDecElement.innerHTML = mins[0]
    minUniElement.innerHTML = mins[1]
  } else {
    minDecElement.innerHTML = 0
    minUniElement.innerHTML = mins[0]
  }
}

function printSeconds() {
  let secs = `${chronometer.getSeconds()}`
  if (secs.length === 2) {
    secDecElement.innerHTML = secs[0]
    secUniElement.innerHTML = secs[1]
  } else {
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = secs[0]
  }
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
  btnLeftElement.innerText = 'STOP'
  btnLeftElement.className = 'btn stop'
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT'
  btnRightElement.className = 'btn split'
}

function setStartBtn() {
  btnLeftElement.innerText = 'START'
  btnLeftElement.className = 'btn start'
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET'
  btnRightElement.className = 'btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'SPLIT') {
    printSplit()
  } else {
    clearSplits()
    chronometer.reset()
  }
})
