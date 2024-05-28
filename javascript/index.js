const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft'),
  btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec'),
  minUniElement = document.getElementById('minUni'),
  secDecElement = document.getElementById('secDec'),
  secUniElement = document.getElementById('secUni'),
  milDecElement = document.getElementById('milDec'),
  milUniElement = document.getElementById('milUni'),
  splitsElement = document.getElementById('splits');

function printTime(currentTime) {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

function printSplit() {
  const splitTimeListItem = document.createElement('li');
  splitTimeListItem.innerHTML = chronometer.split();
  splitTimeListItem.classList.add('list-item');
  splitsElement.appendChild(splitTimeListItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
  const elements = [minDecElement, minUniElement, secDecElement, secUniElement];
  elements.forEach((element) => {
    element.textContent = '0';
  });
}

function setStartBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');

  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  chronometer.start(printTime);
}

function setStopBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');

  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');

  chronometer.stop();
}

function setSplitBtn() {
  printSplit();
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  chronometer.reset();
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.contains('start') ? setStartBtn() : setStopBtn();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  btnRightElement.classList.contains('split') ? setSplitBtn() : setResetBtn();
});
