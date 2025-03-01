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
  const minutes = chronometer.getMinutes();
  const minutesStr = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.textContent = minutesStr[0];
  minUniElement.textContent = minutesStr[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const secondsStr =chronometer.computeTwoDigitNumber(seconds);
  secDecElement.textContent = secondsStr[0];
  secUniElement.textContent = secondsStr[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.getMilliseconds();
  const millisecondsStr = chronometer.computeTwoDigitNumber(milliseconds);
  milDecElement.textContent = millisecondsStr[0];
  milUniElement.textContetn = millisecondsStr[1];
}

function printSplit() {
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.textContent = splitTime;
  splitsElement.apprendChild(li);
}

function clearSplits() {
  splitsElement.innterHTML = '';
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn stop';
}

function setStartBtn() {
  btnLeftElement.textContent = 'SPLIT';
  btnLeftElement.className = 'btn split';
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.classname = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')){
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop ();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
