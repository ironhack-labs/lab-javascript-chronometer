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
  alert('ahpora si')
  if (btnLeftElement.innerText === 'START') {
    btnLeftElement.innerText = 'STOP'
  }
  if (btnRightElement.innerText === 'RESET') {
    btnRightElement.innerText = 'SPLIT'
  }
}

function printMinutes() {

  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(0)
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(0)

}
printMinutes()
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
  printTime()


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  printTime()
});
