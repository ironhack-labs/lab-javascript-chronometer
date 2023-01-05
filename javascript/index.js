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
}

function printMinutes() {}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
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
  btnLeftElement.setAttribute('class', 'btn stop');
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.setAttribute('class', 'btn split');
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.setAttribute('class', 'btn start');
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.setAttribute('class', 'btn reset');
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (e) => {
  const classBtnLeft = btnLeftElement.getAttribute('class');
  if (classBtnLeft === 'btn start') {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const classBtnRight = btnRightElement.getAttribute('class');
  if (classBtnRight === 'btn reset') {
    chronometer.reset();
    clearSplits();
  } else {
    printSplit();
  }
});
