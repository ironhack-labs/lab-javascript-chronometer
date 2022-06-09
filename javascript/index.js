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
  const getMinutes = chronometer.getMinutes();
  minDecElement.textContent = Math.floor(getMinutes / 10);
  minUniElement.textContent = getMinutes % 10;
}

function printSeconds() {
  const getSecons = chronometer.getSeconds();
  secDecElement.textContent = Math.floor(getSecons / 10);
  secUniElement.textContent = getSecons % 10;
}

// ==> BONUS
function printMilliseconds() {
 
}

function printSplit() {
  const splitLi = document.createElement('li');
  splitLi.textContent = chronometer.split();
  splitsElement.appendChild(splitLi);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');

  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

function setSplitBtn() {}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');

  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

function setResetBtn() {
  chronometer.reset();
  clearSplits();
  minDecElement.textContent = 0;
  minUniElement.textContent = 0;
  secDecElement.textContent = 0;
  secUniElement.textContent = 0;
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setResetBtn();
  } else {
    printSplit();
  }
});
