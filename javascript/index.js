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
  setInterval(getMinutes, 1000)


}

function printSeconds() {
  setInterval(getSeconds, 1000)
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
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.start()
  // ... your code goes here
}

function setResetBtn() {

  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', stop() => {
  btnLeftElement.innerHTML = "STOP",
  btnLeftElement.class = "btn stop",
  btnLeftElement.innerHTML = "START",
  btnLeftElement.class = "btn start",
});

// Reset/Split Button
btnRightElement.addEventListener('click', start() => {
  btnRightElement.innerHTML = "SPLIT",
  btnRightElement.class = "btn split",
  btnRightElement.innerHTML = "RESET",
  btnRightElement.class = "btn reset"
});

