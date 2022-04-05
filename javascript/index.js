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
  const currentMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDecElement.innerHTML = currentMinutes[0];
  minUniElement.innerHTML = currentMinutes[1];
}

function printSeconds() {
  const currentSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDecElement.innerHTML = currentSeconds[0];
  secUniElement.innerHTML = currentSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const currentMili = chronometer.twoDigitsNumber(
    chronometer.getSeconds() / 100
  );
}

function printSplit() {
  let newSplit = document.createElement('li');
  let numberText = document.createTextNode(chronometer.splitClick());
  newSplit.appendChild(numberText);
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  splitsElement.innerHTML = '';
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
  if (btnLeftElement.className.includes('start')) {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className.includes('reset')) {
    chronometer.resetClick();
    clearSplits();
  } else {
    printSplit();
  }
});
