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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitTime = chronometer.split();
  const splitItem = document.createElement('li');
  splitItem.innerHTML = splitTime;
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML == 'START') {
    btnLeftElement.classList.replace("start", "stop")
    btnRightElement.classList.replace("reset", "split")
    btnLeftElement.innerHTML = 'STOP'
    btnRightElement.innerHTML = 'SPLIT'
    chronometer.start(printTime)
  } else if (btnLeftElement.innerHTML == 'STOP') {
    btnLeftElement.classList.replace("stop", "start")
    btnRightElement.classList.replace("split", "reset")
    btnLeftElement.innerHTML = 'START'
    btnRightElement.innerHTML = 'RESET'
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML == 'RESET') {
    chronometer.reset();
    minDecElement.innerHTML = '0';
    minUniElement.innerHTML = '0';
    secDecElement.innerHTML = '0';
    secUniElement.innerHTML = '0';
    splitsElement.innerHTML = '';
  } else {
    printSplit();
  }
});
