const Chronometer = require("./chronometer");

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

function clearSplits() {
  // ... your code goes here
}

function setStopBtn(e) {
  e.target.classList.toggle("start")
  
}

function setSplitBtn(e) {
  e.target.classList.toggle("split")
}

function setStartBtn(e) {
  e.target.classList.toggle("start")
}

function setResetBtn(e) {
  e.target.classList.toggle("reset")
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if(btnLeftElement.classList.includes("stop")) {
    chronometer.start();
    setStartBtn();
  }

  if(btnLeftElement.classList.includes("start")) {
    chronometer.stop();
    setStopBtn();
  }
});


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
