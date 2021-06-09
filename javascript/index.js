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
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
}

function printSeconds() {
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement("li")
  li.innerText = chronometer.split()
  let ol = document.querySelector("#splits")
  ol.appendChild(li)
}

function clearSplits() {
  let liNodes = document.querySelectorAll("#splits li")
  liNodes.forEach((li) => {
    li.remove()
  })
}

// why not directly in EventListener?
function setStopBtn() {
  chronometer.stop()
}

function setSplitBtn() {
  // all functions work, I am not sure what to put here
}

function setStartBtn() {
  chronometer.start(printTime)
}

function setResetBtn() {
  chronometer.reset()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")){
    setStartBtn() //chronometer.start(printTime)
    btnLeftElement.innerText = "STOP"
    btnRightElement.innerText = "SPLIT"
  }
  else if (btnLeftElement.classList.contains("stop")) {
    setStopBtn() //chronometer.stop()
    btnLeftElement.innerText = "START"
    btnRightElement.innerText = "RESET"
  }
  btnLeftElement.classList.toggle("start")
  btnLeftElement.classList.toggle("stop")
  btnRightElement.classList.toggle("split")
  btnRightElement.classList.toggle("reset")
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("reset")) {
    setResetBtn() //chronometer.reset()
    printTime()
    clearSplits()
  }
  else if (btnRightElement.classList.contains("split")) {
    printSplit()
  }
});
