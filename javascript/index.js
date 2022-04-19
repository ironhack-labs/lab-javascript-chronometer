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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  /* console.log(minutes); */
  minUniElement.innerHTML = minutes[0];
  minDecElement.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secUniElement.innerHTML = seconds[1];
  secDecElement.innerHTML = seconds[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splits = document.createElement('li');

  splits.innerHTML = chronometer.split();
  splitsElement.appendChild(splits);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.classList = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.classList = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.classList = 'btn start';
  chronometer.start();
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.classList = 'btn reset';
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    chronometer.stop();
    setResetBtn();
    setStartBtn();
    chronometer.reset();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    setStartBtn();
  } else {
    chronometer.split();
    printSplit();
    chronometer.reset();
    clearSplits;
  }
});
