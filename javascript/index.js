const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  setInterval(printSeconds, 1000)
  setInterval(printMinutes, 60000)
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
  btnLeft.classList.remove('start')
  btnLeft.classList.add('stop')
  btnLeft.innerHTML = "STOP"
  // ... your code goes here
}

function setSplitBtn() {
  btnRight.classList.remove('reset')
  btnRight.classList.add ('split')
  btnRight.innerHTML="SPLIT"
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.classList.remove('stop')
  btnLeft.classList.add ('start')
  btnLeft.innerHTML="START"
  // ... your code goes here
}

function setResetBtn() {
  btnRight.classList.remove('split')
  btnRight.classList.add ('reset')
  btnLeft.innerHTML="RESET"
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
