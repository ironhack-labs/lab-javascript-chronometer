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
  const displayArray = chronometer.split().split('');
  printMinutes(displayArray);
  printSeconds(displayArray);
}

function printMinutes(timeDisplay) {
  minDecElement.innerHTML = timeDisplay[0];
  minUniElement.innerHTML = timeDisplay[1];
}

function printSeconds(timeDisplay) {
  secDecElement.innerHTML = timeDisplay[3];
  secUniElement.innerHTML = timeDisplay[4];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const currentSplit = chronometer.split();
  const newLi = document.createElement('li');
  newLi.innerHTML = currentSplit;

  const splitsParent = document.getElementById('splits');

  splitsParent.appendChild(newLi);
}

function clearSplits() {
  const splitsParent = document.getElementById('splits');
  while (splitsParent.hasChildNodes()) {
    splitsParent.removeChild(splitsParent.firstChild);
  }
}

function setStopBtn() {
  btnLeftElement.classList.replace('start', 'stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.replace('reset', 'split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.replace('stop', 'start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.classList.replace('split', 'reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  console.log(btnLeftElement.className);

  if (btnLeftElement.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  console.log(btnRightElement.className);

  if (btnRightElement.className === 'btn reset') {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printTime();
    printSplit();
    chronometer.split();
  }
});
