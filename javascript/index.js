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
  minDecElement.textContent = printMinutes()[0];
  minUniElement.textContent  = printMinutes()[1];
  secDecElement.textContent = printSeconds()[0];
  secUniElement.textContent = printSeconds()[1];
}

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
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
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button

btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.textContent === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
  
  this.intervalId = setInterval(function()
  { 
    printTime();
  }, 1000);

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  minDecElement.textContent = "0";
  minUniElement.textContent  = "0";
  minDecElement.textContent = "0"; 
  secUniElement.textContent = "0";
});
