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
  printMinutes(chronometer.twoDigitsNumber(chronometer.getMinutes));
  printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds));
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

btnLeft.addEventListener('click', () => {
  if(document.getElementById('btnLeft').textContent === 'STOP'){
    setStopBtn();
  }else if(document.getElementById('btnLeft').textContent === 'START'){
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(document.getElementById('btnRight').textContent === 'SPLIT'){
    setSplitBtn();
  }else if(document.getElementById('btnRight').textContent === 'RESET'){
    setResetBtn();
  }
});
