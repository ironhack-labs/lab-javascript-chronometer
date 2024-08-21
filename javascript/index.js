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
  printMinutes();
  printSeconds();
  printMilliseconds();
 
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.getMinutes();
  const minutesStr = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.textContent = minutesStr[0];
  minUniElement.textContent = minutesStr[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.getSeconds();
  const secondsStr = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.textContent = secondsStr[0];
  secUniElement.textContent = secondsStr[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.getMilliseconds();
  const millisecondsStr = chronometer.computeTwoDigitNumber(milliseconds);
  milDecElement.textContent = millisecondsStr[0];
  milUniElement.textContent = millisecondsStr[1];
}

function printSplit() {
  // ... your code goes here
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.textContent = splitTime;
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    // Start the chronometer
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    // Stop the chronometer
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) {
    // Reset the chronometer
    chronometer.reset();
    printTime(); // Reset the time display
    clearSplits();
  } else {
    // Split the time
    printSplit();
  }
});
