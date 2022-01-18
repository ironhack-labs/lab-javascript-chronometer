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
  btnLeftElement.style.background = '#5fca5f';
  btnLeftElement.innerText = 'START';
}

function setSplitBtn() {
  btnRightElement.style.background = '#908e8e';
  btnRightElement.innerText = 'RESET';
}

function setStartBtn() {
  btnLeftElement.style.background = '#f14949';
  btnLeftElement.innerText = 'STOP';
}

function setResetBtn() {
  btnRightElement.style.background = '#0851ab';
  btnRightElement.innerText = 'SPLIT';
}


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
    printTime();
    printMinutes();
    printSeconds();
    printMilliseconds();
    setStopBtn();
    setStartBtn();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
