/*jshint esversion:8 */
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

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP";
  btnLeftElement.className = "btn stop";
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT";
  btnRightElement.className = "btn split";
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START";
  btnLeftElement.className = "btn start";
  console.log("setStartBtn");
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET";
  btnRightElement.className = "btn reset";
}

// Start/Stop Button
btnLeftElement.addEventListener ('click', () => {
  console.log("eventlistener");
  if(btnLeftElement.classList.contains('btn start')) {

    //if(chronometer.)
    setStartBtn();
    chronometer.start();
  } else {
    setStopBtn();
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener = ('click', () => {
  // ... your code goes here
});
