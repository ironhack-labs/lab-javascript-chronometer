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
 let minDec = minDecElement; 
  
 minDec.innerHTML = chronometer.split();
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
  btnLeftElement.classList.replace('start', 'stop');
  btnLeftElement.innerHTML = 'STOP';}

function setSplitBtn() {
  btnRightElement.classList.replace('reset', 'split');
  btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.replace('stop', 'start')
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.classList.replace('split', 'reset')
  btnRightElement.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  if (btnLeftElement.className === 'btn start') {
    setStopBtn();
    chronometer.start();
  } else {
    setStartBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn reset') {
    setSplitBtn();
    chronometer.reset();
  } else {
    setResetBtn();
    chronometer.split();
  }
});
