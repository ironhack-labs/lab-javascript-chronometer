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
}

function printMinutes() {
  setInterval(() => {
    firstNumber = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
    secondNumber = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
    minDecElement.innerHTML = firstNumber
    minUniElement.innerHTML = secondNumber
  },60000)
}

function printSeconds() {
  setInterval(() => {
    firstNumber = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
    secondNumber = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
    secDecElement.innerHTML = firstNumber
    secUniElement.innerHTML = secondNumber
    }, 1000)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let list = document.getElementById('splits')
  let entry = document.createElement('li')
  let split = chronometer.split()
  entry.appendChild(document.createTextNode(split))
  list.appendChild(entry)
  // ... your code goes here
}

function clearSplits() {
  let list = document.getElementById('splits')
  list.innerHTML = ''
}

function setStopBtn() {
  chronometer.stop()
  btnLeftElement.classList.toggle('start')
}

function setSplitBtn() {
  chronometer.split()
  printSplit()  
}

function setStartBtn() {
  chronometer.start()
  printSeconds()
  printMinutes()
  btnLeftElement.classList.toggle('stop')
}

function setResetBtn() {
  chronometer.reset()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.value === 'Start') {
    setStartBtn()
    btnLeftElement.value = 'Stop'
    btnLeftElement.innerHTML = 'STOP'
    btnRightElement.classList.toggle('split')
    btnRightElement.innerHTML = 'SPLIT'
  } else {
    setStopBtn()
    btnLeftElement.value = 'Start'
    btnLeftElement.innerHTML = 'START'
    btnRightElement.classList.toggle('reset')
    btnRightElement.innerHTML = 'RESET'
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.value === 'Reset' && btnLeftElement.value === 'Start') {
    setResetBtn()
    clearSplits()
  } else if (btnLeftElement.value === 'Stop'){
    setSplitBtn()
  }
});