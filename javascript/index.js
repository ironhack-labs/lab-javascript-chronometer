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
 printSeconds()
 printMinutes()
}

function printMinutes() {
  minDecElement.innerText = Math.floor(chronometer.getMinutes() / 10)
  minUniElement.innerText = chronometer.getMinutes() % 10
}

function printSeconds() {
secDecElement.innerText = Math.floor(chronometer.getSeconds() / 10)
secUniElement.innerText = chronometer.getSeconds() % 10
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newSplit = document.createElement('li')
  newSplit.innerText = chronometer.split()
  splitsElement.appendChild(newSplit)
}
function clearSplits() {
splitsElement.querySelectorAll('li').forEach((li) => li.remove())
chronometer.reset()
printTime()
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP'
  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle('stop')
}
function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT'
  btnRightElement.classList.toggle('split')
  btnRightElement.classList.toggle('reset')}

function setStartBtn() {
  btnLeftElement.innerText = 'START'
  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle('stop')
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET'
  btnRightElement.classList.toggle('split')
  btnRightElement.classList.toggle('reset')}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if (btnLeftElement.classList.contains('start')) {
  chronometer.start(printTime)
  setStopBtn()
  setSplitBtn()
} else if (btnLeftElement.classList.contains('stop')) {
  chronometer.stop()
  setStartBtn()
  setResetBtn()
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    clearSplits()
  }
  else if (btnLeftElement.classList.contains('stop')) {
    printSplit()
  }

});
