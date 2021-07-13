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
  const minutes = chronometer.getMinutes()
  minDecElement.innerHTML = chronometer.computeTwoDigitNummer(minutes)[0]
  minUniElement.innerHTML = chronometer.computeTwoDigitNummer(minutes)[1] 
}

function printSeconds() {
  const seconds = chronometer.getSeconds()
  secDecElement.innerHTML = chronometer.computeTwoDigitNummer(seconds)[0]
  secUniElement.innerHTML = chronometer.computeTwoDigitNummer(seconds)[1]
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
  btnLeftElement.setAttribute('class', 'btn stop')
  btnLeftElement.innerText = 'STOP'
}

function setSplitBtn() {
  btnLeftElement.setAttribute('class', 'btn split')
  btnLeftElement.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.setAttribute('class', 'btn start')
  btnLeftElement.innerText = 'START'
}

function setResetBtn() {
  btnRightElement.setAttribute('class', 'btn reset')
  btnRightElement.innerText = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.attributes.class.value == 'btn start'){
    setStopBtn()
    setSplitBtn()
    chronometer.start(printTime)
  }
  if (btnLeftElement.attributes.class.value == 'btn stop'){
    setStartBtn()
    setResetBtn()
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
