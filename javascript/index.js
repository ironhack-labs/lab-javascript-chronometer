const chronometer = new Chronometer();
let printInterval;
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
  printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let splitMinutes = minutes.split('');
  minDecElement.innerHTML = splitMinutes[0];
  minUniElement.innerHTML = splitMinutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let splitSeconds = seconds.split('');
  secDecElement.innerHTML = splitSeconds[0];
  secUniElement.innerHTML = splitSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.getMilliseconds();
  let splitMilliseconds = milliseconds.split('');
  milDecElement.innerHTML = splitMilliseconds[0];
  milUniElement.innerHTML = splitMilliseconds[1];
}

function printSplit() {
  // ... your code goes here
  let milliseconds = chronometer.getMilliseconds();
  let newSplit = chronometer.split();
  splitsElement.innerHTML += `
  <li>${newSplit}:${milliseconds}</li>
  `;
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = null;
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (event) => {
  // ... your code goes here

  if (event.target.outerText === 'START') {
    chronometer.start();
    printInterval = setInterval(printTime, 10);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
    clearInterval(printInterval);
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', (event) => {
  // ... your code goes here
  if (event.target.outerText === 'RESET') {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
