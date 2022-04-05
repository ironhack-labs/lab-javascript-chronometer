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
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
  // console.log(milDecElement, milUniElement)
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splitLi = document.createElement('li')
  splitLi.innerHTML = chronometer.split()
  splitsElement.appendChild(splitLi)
}

function clearSplits() {
  let splitLi = document.createElement('li')
  splitLi.innerHTML = ''
  splitsElement.appendChild(splitLi)
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop'
  btnLeftElement.innerHTML = 'STOP'
  chronometer.stop()
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  chronometer.start()
  printSeconds()
  printMinutes()
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
