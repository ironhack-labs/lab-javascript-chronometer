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
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

//CLEAR SPLIT
function clearSplits() {
  btnRightElement.textContent = "SPLIT"

  btnRightElement.classList.remove("reset")
  btnRightElement.classList.add("split")
}

//STOP
function setStopBtn() {
  btnLeftElement.textContent = "START"

  btnLeftElement.classList.remove("stop")
  btnLeftElement.classList.add("start")
}

//SPLIT
function setSplitBtn() {
  btnRightElement.textContent = "CLEAR"

  btnRightElement.classList.remove("split")
  btnRightElement.classList.add("reset")
}

//START
function setStartBtn() {
  btnLeftElement.textContent = "STOP"

  btnLeftElement.classList.remove("start")
  btnLeftElement.classList.add("stop")
  chronometer.start()
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let status = document.getElementById("btnLeft").textContent;
  if (status == "START") {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  let status = document.getElementById("btnRight").textContent
  if (status == "CLEAR") {
    clearSplits()
  } else {
    setSplitBtn()
  }
});
