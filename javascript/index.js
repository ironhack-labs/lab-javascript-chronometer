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
  //return `${printMinutes}:${printSeconds)}`
}

function printMinutes(minutes) {
  //link with 'minUni' & 'minDec'

}

function printSeconds(secUni, secDec) {
  secUni.innerHTML = getSeconds
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  //link with 'splits'
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
btnLeft.addEventListener('click', () => {
  errorMessage.style.display = 'none';
  console.log('Click add username button')
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
