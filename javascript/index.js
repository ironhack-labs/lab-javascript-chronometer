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
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.classList.remove('reset');
    btnLeftElement.classList.add('split');
    btnRightElement.innerHTML = 'SPLIT';

    chronometer.start();
    
  } else if (btnLeftElement.classList.contains('stop')) {
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start')
    btnLeftElement.innerHTML = 'START';
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    btnRightElement.innerHTML = 'RESET';

    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
