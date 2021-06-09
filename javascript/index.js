//const Chronometer = require("./chronometer");

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
  let minutes = chronometer.getMinutes();

  // ... your code goes here
}

function printSeconds() {



  setInterval(() => {
    let seconds = chronometer.getSeconds();
    secUniElement.textContent = seconds;
  }, 1000);


  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  reset()
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.classList.toggle("stop")
  // btnLeftElement.classList.remove("start")
  // btnLeftElement.classList.add("stop")
  let textLeft = btnLeftElement.textContent
  if (textLeft === "START") {
    btnLeftElement.textContent = "STOP"
  }
  else if (btnLeftElement.textContent === "STOP") {
    btnLeftElement.textContent = "START"
  }

  // ... your code goes here
}

function setResetBtn() {
  btnRightElement.classList.toggle("split")
  //btnRightElement.classList.remove("reset")
  //btnRightElement.classList.add("split")
  let textRigth = btnRightElement.textContent
  if (textRigth === "SPLIT") {
    btnRightElement.textContent = "RESET"
  } else if (btnRightElement.textContent === "RESET") {
    btnRightElement.textContent = "SPLIT"
  }

  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  setStartBtn()
  setResetBtn()
  printMinutes()
  printSeconds()
  chronometer.start()
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
