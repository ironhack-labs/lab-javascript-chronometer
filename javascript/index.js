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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.innerText = mins[0];
  minUni.innerText = mins[1];
}

function printSeconds() {
  let secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  
  secDec.innerText = secs[0];
  secUni.innerText = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML += `<li>${value}</li>`;
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', () => { 
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
});