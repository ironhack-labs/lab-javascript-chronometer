const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitTime = chronometer.split();
  const splits = document.getElementById('splits');
  const li = document.createElement('li');
  li.innerText = splitTime;
  splits.appendChild(li);}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStartBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.className = 'btn stop';
  btnRight.innerText = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStopBtn() {
  btnLeft.innerText = 'START';
  btnLeft.className = 'btn start';
  btnRight.innerText = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    // Start
    chronometer.start(printTime);
    setStartBtn();
  } else {
    // Stop
    chronometer.stop();
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    // Reset
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    // Split
    printSplit();
  }
});