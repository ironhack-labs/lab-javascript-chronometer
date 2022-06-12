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
  printMilliseconds()
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
  const getMiliseconds = chronometer.getMiliseconds();
  milDecElement.textContent = Math.floor(getMiliseconds / 10);
  milUniElement.textContent = getMiliseconds % 10;
}

function printSplit() {
  const splitLi = document.createElement('li');
  splitLi.textContent = chronometer.split();
  splitsElement.appendChild(splitLi);
}

function clearSplits() {
  splitsElement.innerHTML = '';
  chronometer.reset();
  minDecElement.textContent = 0;
  minUniElement.textContent = 0;
  secDecElement.textContent = 0;
  secUniElement.textContent = 0;
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();
    setSplitBtn();
  } else {
    setStopBtn();
    setResetBtn()
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setResetBtn();
    clearSplits()
  } else {
    printSplit();
  }
});
