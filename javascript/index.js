const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

function toggleClassesAndText(event) {
  btnLeft.classList.toggle('stop')
  btnRight.classList.toggle('split')
  if (btnLeft.innerText === 'START') {
    btnLeft.innerText = 'STOP'
    btnRight.innerText = 'SPLIT'
  } else {
    btnLeft.innerText = 'START'
    btnRight.innerText = 'RESET'
  }
}

function toggleChronometerOn() {
  if (btnLeft.className === 'btn start') {
    chronometer.startClick();
  } else {
    chronometer.stopClick();
  }
}

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  chronometer.twoDigitsNumber();
}

function printMinutes() {
  minDec.innerText = chronometer.getMinutes();
}

function printSeconds() {
  minUni.innerText = chronometer.getSeconds();
}

btnLeft.addEventListener("click", toggleClassesAndText)
btnLeft.addEventListener("click", toggleChronometerOn)
btnLeft.addEventListener("click", printMinutes)
btnLeft.addEventListener("click", printSeconds)

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
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
