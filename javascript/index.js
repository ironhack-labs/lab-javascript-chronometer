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
  // ... your code goes here
  const timeToPrint = chronometer.split();
  let nodeTime = document.createElement('li');
  nodeTime.innerText = timeToPrint;
  splitsElement.appendChild(nodeTime);
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer
    .computeTwoDigitNumber(chronometer.getMinutes())
    .toString();

  minDecElement.innerText = parseInt(minutes[0]);
  minUniElement.innerText = parseInt(minutes[1]);
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer
    .computeTwoDigitNumber(chronometer.getSeconds())
    .toString();
  // console.log(seconds);

  secDecElement.innerText = parseInt(seconds[0]);
  secUniElement.innerText = parseInt(seconds[1]);
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
btnLeftElement.addEventListener('click', (e) => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.classList.replace('start', 'stop');
    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';
    btnRightElement.classList.replace('reset', 'split');
    chronometer.start();
    setInterval(() => {
      printSeconds();
      printMinutes();
    }, 1000);
  } else {
    btnLeftElement.classList.replace('stop', 'start');
    btnRightElement.classList.replace('split', 'reset');
    btnLeftElement.innerText = 'START';
    btnRightElement.innerText = 'RESET';
    chronometer.stop();
    printSeconds();
    printMinutes();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    printTime();
  } else {
    chronometer.reset();
    splitsElement.innerText = '';
  }
});
