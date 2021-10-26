
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
  chronometer.split()

setInterval (() => {
  printMinutes();
  printSeconds();
},1000)
}

function printMinutes() {
  // ... your code goes here
minDecElement.textContent = chronometer.split().charAt(0);
minUniElement.textContent = chronometer.split().charAt(1);
}

function printSeconds() {
  // ... your code goes here
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
  // ... your code goes here
  chronometer.start()
  printTime()
btnLeftElement.innerHTML = 'STOP'
btnLeftElement.className = 'btn stop'
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

btnRightElement.innerHTML = 'SPLIT'
btnLeftElement.className = 'btn reset'
});
