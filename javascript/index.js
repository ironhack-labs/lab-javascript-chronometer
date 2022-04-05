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
  const minutes = chronometer.getMinutes();
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minutes)[1];
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minutes)[0];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  secUniElement.innerText = chronometer.computeTwoDigitNumber(seconds)[1];
  secDecElement.innerText = chronometer.computeTwoDigitNumber(seconds)[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const newElm = document.createElement('li');
  newElm.innerText = chronometer.split();
  splitsElement.appendChild(newElm);
}

function clearSplits() {
  splitsElement.innerText = ' ';
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className.includes('start')) {
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
  if(btnRightElement.className.includes('split')) {
    printSplit()
  } else {
    chronometer.stop();
    clearSplits();
    setStartBtn();
  }
});
