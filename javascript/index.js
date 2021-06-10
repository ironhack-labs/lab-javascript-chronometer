const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDecElement = document.getElementById('minDec');
let minUniElement = document.getElementById('minUni');
let secDecElement = document.getElementById('secDec');
let secUniElement = document.getElementById('secUni');
let milDecElement = document.getElementById('milDec');
let milUniElement = document.getElementById('milUni');
let splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.currentMilliseconds);
  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
}

function printSplit() {
  let newLi = document.createElement('li');
  newLi.className = "list-item";
  newLi.innerHTML = `${chronometer.split()}`;
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.innerHTML = "";
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
btnLeft.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')) {
  // if (btnLeftElement.className.indexOf('start') > 0) {
    chronometer.start(printTime,  /* BONUS => */ printMilliseconds);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')) {
  // if (btnRightElement.className.indexOf('reset') > 0) {
    clearSplits();
    chronometer.reset();
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = 0;
    milDecElement.innerHTML = 0;
    milUniElement.innerHTML = 0;
  } else {
    printSplit();
  }});