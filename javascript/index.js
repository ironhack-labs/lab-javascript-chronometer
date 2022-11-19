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
  printMiliseconds()
  printSeconds()
  printMinutes()
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())

  minDecElement.textContent = minutes[0]
  minUniElement.textContent = minutes[1]
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())

  secDecElement.textContent = seconds[0]
  secUniElement.textContent = seconds[1]
}

function printMiliseconds() {
  const miliseconds = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds())

  milDecElement.textContent = miliseconds[0]
  milUniElement.textContent = miliseconds[1]
}

function printSplit() {
  const split = document.createElement('li')
  const time = chronometer.split()

  split.textContent = time

  splitsElement.appendChild(split)
}

function clearSplits() {
  splitsElement.textContent = ''
}

function setStopBtn() {
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  btnLeftElement.textContent = 'STOP'

  chronometer.start(printTime)
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  btnRightElement.textContent = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.textContent = 'START'

  chronometer.stop()
}

function setResetBtn() {
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  btnRightElement.textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnStart = btnLeftElement.classList.contains('start')

  if (btnStart) {
    setStopBtn()
    setSplitBtn()
  } else {
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  btnReset = btnRightElement.classList.contains('reset')

  if (btnReset) {
    chronometer.reset();
    clearSplits();
    printTime()
  } else {
    printSplit()
  }
});
