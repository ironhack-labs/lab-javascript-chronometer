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

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

function printSplit() {
  const splitsElement = document.getElementById('splits');
  const splitItem = document.createElement('li');
  splitItem.className = 'list-item';
  splitItem.innerHTML = `${chronometer.split()}:${chronometer.splitMilliseconds()}`;
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  const splitsElement = document.getElementById('splits');
  splitsElement.innerHTML = '';
}

// Change Left Button to STOP
function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerText = 'STOP';
  chronometer.start(printTime);
}

// Change Right Button to SPLIT
function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerText = 'SPLIT';
}

// Change Left Button to START
function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';
  chronometer.stop();
}

// Change Right Button to RESET
function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    // Change Left Button to STOP
    setStopBtn();

    // Change Right Button to SPLIT
    setSplitBtn();
  } else {
    // Change Left Button to START
    setStartBtn();

    // Change Right Button to RESET
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    // RESET
    clearSplits();
    chronometer.reset();
    printTime(); // clear timer
  } else {
    // SPLIT
    printSplit();
  }
});
