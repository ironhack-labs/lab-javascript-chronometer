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
  // ... your code goes here
  btnLeft.textContent = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {

  btnRight.textContent = 'RESET'
  btnRight.className = 'btn reset'
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.textContent = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  // ... your code goes here
  btnRight.textContent = 'SPLIT'
  btnRight.className = 'btn split'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  chronometer.startClick()
  if(btnLeft.className === 'btn start') {
    setStopBtn()
  } else {
    setStartBtn()
  }
    setSplitBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
    setResetBtn()
});
