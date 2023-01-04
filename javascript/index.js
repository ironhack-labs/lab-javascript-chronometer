const chronometer = new Chronometer()
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
  printMilliseconds()
}
function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
}
function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
}
// ==> BONUS
function printMilliseconds() {
  let miliseconds = chronometer.miliseconds
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(miliseconds)[0]
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(miliseconds)[1]
}
function printSplit() {
  const list = document.querySelector("#splits")
  const split = document.createElement("li")
  split.innerHTML = `${minDecElement.innerHTML}${minUniElement.innerHTML}:${secDecElement.innerHTML}${secUniElement.innerHTML}:${milDecElement.innerHTML}${milUniElement.innerHTML}`
  list.appendChild(split)
}
function clearSplits() {
  document.querySelectorAll("li").forEach(item => item.remove())
}

function setStopBtn() {
  btnLeftElement.classList.toggle("stop")
  if(btnLeftElement.classList.contains("stop")) {
    btnLeftElement.innerHTML = "STOP"
    chronometer.start(printTime)
  }
}

function setSplitBtn() {
  btnRightElement.classList.toggle("split")
  if(btnRightElement.classList.contains("split")) {
    btnRightElement.innerHTML = "SPLIT"
  }
}

function setStartBtn() {
  btnLeftElement.classList.toggle("start")
  if(btnLeftElement.classList.contains("start")) {
    btnLeftElement.innerHTML = "START"
    clearInterval(chronometer.intervalId)
  }
}

function setResetBtn() {
  btnRightElement.classList.toggle("reset")
  if(btnRightElement.classList.contains("reset")) {
    btnRightElement.innerHTML = "RESET"
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  setStopBtn()
  setStartBtn()
  setSplitBtn()
  setResetBtn()
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains("reset")) {
    secDecElement.innerHTML = 0
    secUniElement.innerHTML = 0
    minDecElement.innerHTML = 0
    minUniElement.innerHTML = 0
    milDecElement.innerHTML = 0
    milUniElement.innerHTML = 0
    chronometer.currentTime = 0
    clearSplits()
  } else {
    printSplit()
  }
});