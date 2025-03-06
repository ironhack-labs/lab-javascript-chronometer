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
  const minutesFormat = chronometer.computeTwoDigitNumber(minutes);
  const minutesSplit = minutesFormat.split('');
  minDecElement.textContent = minutesSplit[0];
  minUniElement.textContent = minutesSplit[1];

}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const secondsFormatted = chronometer.computeTwoDigitNumber(seconds);
  const secondsSplit = secondsFormatted.split('');
  secDecElement.textContent = secondsSplit[0];
  secUniElement.textContent = secondsSplit[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const actualSplit = chronometer.split();
  const newLi = document.createElement('li');
  newLi.textContent = actualSplit;

  splitsElement.appendChild(newLi);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStartBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.textContent = 'STOP';
  chronometer.start(printTime);
}

function setStopBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.textContent = 'START';
  chronometer.stop();
}

function setSplitBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.textContent = 'RESET';
  printSplit();
}

function setResetBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.textContent = 'SPLIT';
  chronometer.reset();
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // cuando clico en botón start, debo de cambiar  STOP
  if (btnLeft.getAttribute('class') === 'btn start') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.getAttribute('class') === 'btn reset') {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
