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


chronometer.split


function printTime() {
chronometer.split()
setInterval(() => {
  printMinutes()
  printSeconds()
}, 1000);
}

function printMinutes() {
minDecElement.textContent = chronometer.split().charAt(0);
minUniElement.textContent = chronometer.split().charAt(1);
}

function printSeconds() {
secDecElement.textContent = chronometer.split().charAt(3);
secUniElement.textContent = chronometer.split().charAt(4);
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
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  chronometer.start()
  printTime()
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

});
