const chron = new Chronometer();

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
  printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes() {
  const minutes = chron.getMinutes();
  minDecElement.innerHTML = chron.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerHTML = chron.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  const seconds = chron.getSeconds();
  secDecElement.innerHTML = chron.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerHTML = chron.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chron.getMilliseconds();
  milDecElement.innerHTML = chron.computeTwoDigitNumber(milliseconds)[0];
  milUniElement.innerHTML = chron.computeTwoDigitNumber(milliseconds)[1];
}

function printSplit() {
  const splits = document.getElementById('splits');
  const newLi = document.createElement('li');
  newLi.innerText = chron.getSplit();
  splits.appendChild(newLi);
}

function clearSplits() {
  const splits = document.getElementById('splits');
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.setAttribute('class', 'btn stop');
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.setAttribute('class', 'btn split');
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.setAttribute('class', 'btn start');
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.setAttribute('class', 'btn reset');
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (e) => {
  const classBtnLeft = btnLeftElement.getAttribute('class');
  if (classBtnLeft === 'btn start') {
    chron.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chron.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const classBtnRight = btnRightElement.getAttribute('class');
  if (classBtnRight === 'btn reset') {
    chron.reset(printTime);
    clearSplits();
  } else {
    printSplit();
  }
});
