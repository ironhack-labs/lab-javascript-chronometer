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
  printSeconds();
  //printMinutes();
}

function printMinutes() {
  /*const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];*/
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  console.log(seconds[0] + " - " + seconds[1]);
  console.log(chronometer.getSeconds());

  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
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
  // ... your code goes here
});
