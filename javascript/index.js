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
//Globals

let startState = true
let resetState = true
let splitsToLi = ""

function printTime() {

  let totalMinutes = printMinutes()
  let computedMinutes = chronometer.computeTwoDigitNumber(totalMinutes)

  let totalSeconds = printSeconds()
  let computedSeconds = chronometer.computeTwoDigitNumber(totalSeconds)

  secDecElement.textContent = computedSeconds.charAt(0)
  secUniElement.textContent = computedSeconds.charAt(1)
  minDecElement.textContent = computedMinutes.charAt(0)
  minUniElement.textContent = computedMinutes.charAt(1)

}
function printMinutes() {
  return chronometer.getMinutes()
}
function printSeconds() {
  return chronometer.getSeconds()
}

function setResetBtn() {
  resetState = true
  btnRightElement.textContent = "RESET"
  btnRightElement.style.backgroundColor = '#908e8e'

}

function setSplitBtn() {
  resetState = false
  btnRightElement.textContent = "SPLIT"
  btnRightElement.style.backgroundColor = '#0851ab'
}

function setStartBtn() {
  btnLeftElement.textContent = "START"
  btnLeftElement.style.backgroundColor = '#5fca5f'
  startState = true
}
function setStopBtn() {
  btnLeftElement.textContent = "STOP"
  btnLeftElement.style.backgroundColor = '#f14949'
  startState = false

}
function printSplit() {
  let ol = document.getElementById("splits");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(splitsToLi));
  ol.appendChild(li);
}

function clearSplits() {

}

/* BONUS
function printMilliseconds() {

}*/

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const startStopButtonClick = document.querySelector('#btnleft')
  if (startState == true) {
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  }
  else if (startState == false) {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }

})

btnRightElement.addEventListener('click', () => {
  const resetButtonClick = document.querySelector('#btnright')
  if (resetState == true) {
    chronometer.reset()
    printTime()
  }
  if (resetState == false) {
    splitsToLi = chronometer.split()
    printSplit()
  }

})
