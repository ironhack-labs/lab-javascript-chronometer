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

var chronometer = new Chronometer();

function printTime(minutes, seconds, milliseconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  try {
    minDecElement.innerHTML = minutes[0];
    minUniElement.innerHTML = minutes[1];
  } catch (error) {
    console.log(error);
  }
}

function printSeconds(seconds) {
  try {
    secDecElement.innerHTML = seconds[0];
    secUniElement.innerHTML = seconds[1];
  } catch (error) {
    console.log(error);
  }
}

function printMilliseconds(miliseconds) {
  try {
    milDecElement.innerHTML = miliseconds[0];
    milUniElement.innerHTML = miliseconds[1];
  } catch (error) {
    console.log(error);
  }
}

function printSplit(time) {
  try {
    let newLi = document.createElement('li');
    let timeText = document.createTextNode(time);

    newLi.appendChild(timeText);

    splitsElement.appendChild(newLi);
  } catch (error) {
    console.log(error);
  }
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', function () {
  if (btnLeftElement.innerHTML === 'START') {
    chronometer.start();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', function () {
  if (btnRightElement.innerHTML === 'RESET') {
    chronometer.reset();
    clearSplits();
  } else {
    printSplit(chronometer.split());
  }
});

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = index;
}
