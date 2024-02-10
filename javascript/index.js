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
  printMilliseconds()
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())
  milDecElement.innerText = milliseconds[0]
  milUniElement.innerText = milliseconds[1]
}

function printSplit() {
  const splitTime = chronometer.split()
  const newSplit = document.createElement('li')
  newSplit.innerText = splitTime
  splitsElement.appendChild(newSplit)
}

function clearSplits() {
  splitsElement.innerHTML = ''
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
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn()
    setSplitBtn()
    chronometer.start(printTime)
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stop()
  }
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.reset()
    clearSplits()
    printTime()
  } else {
    printSplit()
  }
})
