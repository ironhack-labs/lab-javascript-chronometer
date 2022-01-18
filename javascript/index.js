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
  minUniElement.innerText = chronometer.computeTwoDigitNumbers(chronometer.getMinutes())[1];
  minUniElement.innerText = chronometer.computeTwoDigitNumbers(chronometer.getMinutes())[0];
}
  
function printSeconds() {
  secUniElement.innerText = chronometer.computeTwoDigitNumbers(chronometer.getSeconds())[1];
  secUniElement.innerText = chronometer.computeTwoDigitNumbers(chronometer.getMinutes())[0];
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
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop")
  btnLeftElement.innerText = "STOP";
}

function setSplitBtn() {
  
}

function setStartBtn() {
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
  btnLeftElement.innerText = "START";
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")){
    chronometer.start(printTime);
    setStopBtn();
  } else {
    chronometer.stop();
    setStartBtn();
  }
});







// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
