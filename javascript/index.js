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
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

function printMilliseconds() {
  const miliseconds = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds());
  console.log(miliseconds);
  milDecElement.innerHTML = miliseconds[0];
  milUniElement.innerHTML = miliseconds[1];
}

function printSplit() {
  const record = document.createElement('li');
  record.classList.add('list-item');
  record.innerHTML = chronometer.split();
  splitsElement.appendChild(record);
  console.log(chronometer.split())
}

function clearSplits() {
  printMilliseconds();
  printSeconds();
  printMinutes();
  splitsElement.innerHTML = '';
}

function setStopBtn(btn) {
  btn.classList.replace('start', 'stop');
  btn.innerHTML = 'STOP';
}

function setSplitBtn(btn) {
  btn.classList.replace('reset', 'split');
  btn.innerHTML = 'SPLIT';
}

function setStartBtn(btn) {
  btn.classList.replace('stop', 'start');
  btn.innerHTML = 'START';
}

function setResetBtn(btn) {
  btn.classList.replace('split', 'reset');
  btn.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    setStopBtn(btnLeftElement);
    setSplitBtn(btnRightElement);
    chronometer.start(printTime);
  } else {
    setStartBtn(btnLeftElement);
    setResetBtn(btnRightElement);
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn split') {
    printSplit();
  } else {
    chronometer.reset();
    clearSplits();
  }
});
