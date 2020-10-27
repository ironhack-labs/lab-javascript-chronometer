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

  btnLeft.innerHTML = 'STOP'
  btnLeft.setAttribute('class', 'btn stop')
  // ... your code goes here
}

function setSplitBtn() {

  btnRight.innerHTML = 'SPLIT'
  btnRight.setAttribute('class', 'btn split')
  // ... your code goes here
}

function setStartBtn() {

  btnLeft.innerHTML = 'START'
  btnLeft.setAttribute('class', 'btn start')
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.innerHTML === 'START') {
    setStopBtn()
  } else {
    setStartBtn()
  }
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.innerHTML === 'RESET') {
    setSplitBtn()
  } else {
    setResetBtn()
  }
  // ... your code goes here
});
