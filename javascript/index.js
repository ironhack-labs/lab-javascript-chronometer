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
  let sec = chronometer.getSeconds();
  let min = chronometer.getMinutes();
  let secTwoDigits = chronometer.computeTwoDigitNumber(sec);
  let minTwoDigits = chronometer.computeTwoDigitNumber(min);

  secDecElement.innerText = secTwoDigits[0];
  secUniElement.innerText = secTwoDigits[1];
  minDecElement.innerText = minTwoDigits[0];
  minUniElement.innerText = minTwoDigits[1];
}

function printMinutes() {
  return chronometer.getMinutes();

  // ... your code goes here
}

function printSeconds() {
  return chronometer.getSeconds();

  // ... your code goes here
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
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    btnLeftElement.className = 'btn stop';
    btnLeftElement.textContent = 'STOP';

    btnRightElement.className = 'btn split';
    btnRightElement.textContent = 'SPLIT';
    chronometer.start(printTime);
  } else {
    btnLeftElement.className = 'btn start';
    btnLeftElement.textContent = 'START';

    btnRightElement.className = 'btn reset';
    btnRightElement.textContent = 'RESET';
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    // btnRightElement.className = 'btn reset';
    // btnRightElement.textContent = 'RESET';
  } else {
    // btnRightElement.className = 'btn split';
    // btnRightElement.textContent = 'SPLIT';
  }

  // ... your code goes here
});
