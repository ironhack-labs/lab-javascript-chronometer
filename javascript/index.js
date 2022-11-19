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

let fullSecs;
let fullMins;

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  fullMins = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerText = fullMins[0]
  minUniElement.innerText = fullMins[1]
}

function printSeconds() {
  fullSecs = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText = fullSecs[0]
  secUniElement.innerText = fullSecs[1]
}

// ==> BONUS
function printMilliseconds() {
  milDecElement
  milUniElement
}

function printSplit() {
  splitsElement.innerHTML += `<li>${chronometer.computeTwoDigitNumber(chronometer.getMinutes())}:${chronometer.computeTwoDigitNumber(chronometer.getSeconds())}</li>`;
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit()
  }
  else {
    chronometer.reset();
    clearSplits();
    printTime();
  }
});
