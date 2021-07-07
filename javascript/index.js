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
  printMilliseconds();
  // ... your code goes here
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {
  let millisec = chronometer.getMilliseconds();
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(millisec)[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(millisec)[1];
  
}

function printSplit() {
  splitsElement.innerHTML += `<li> ${chronometer.split(printTime)} </li>`;
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = "Start";
  btnLeftElement.classList.replace('stop', 'start');
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = "Split";
  btnRightElement.classList.replace('reset', 'split');
}

function setStartBtn() {
  btnLeftElement.innerHTML = "Stop";
  btnLeftElement.classList.replace('start', 'stop');
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = "Reset";
  btnRightElement.classList.replace('split', 'reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  console.log(chronometer);
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStartBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStopBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  }
  else {
    chronometer.reset();
    printTime();
    clearSplits();
  }
}

);

