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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
}

function printSplit() {
  const li = document.createElement('li');
  li.textContent = chronometer.split();
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.textContent = 'STOP';
  btnLeft.classList.replace('start', 'stop');
}

function setSplitBtn() {
  btnRight.textContent = 'SPLIT';
  btnRight.classList.replace('reset', 'split');
}

function setStartBtn() {
  btnLeft.textContent = 'START';
  btnLeft.classList.replace('stop', 'start');
}

function setResetBtn() {
  btnRight.textContent = 'RESET';
  btnRight.classList.replace('split', 'reset');
}

btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
