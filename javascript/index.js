const chronometer = new Chronometer();

// get the buttons:
function changeStartStop() {
  //esto va con un if dependiendo de qué está activado
  btnLeftElement.classList.toggle('stop')
  btnLeftElement.innerHTML = 'STOP'
}

function changeResetSplit() {
  btnRightElement.classList.toggle('split')
  btnRightElement.innerHTML = "SPLIT"
}

function showTime() {
  minDecElement.classList.setAttribute()
  minUniElement.classList.setAttribute()
  secDecElement.classList.setAttribute()
  secUniElement.classList.setAttribute()

}
// get the DOM elements that will serve us to display the time:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  showTime()
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
  changeStartStop()
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  changeResetSplit()
  // ... your code goes here
});
