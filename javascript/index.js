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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).toString().split('')
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).toString().split('');
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
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
  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.start(printTime());
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(chronometer.intervalId === null){
    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    setStartBtn();
  } else {
    btnLeftElement.innerText = 'START';
    btnRightElement.innerText = 'RESET';
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
});
