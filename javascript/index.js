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
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerHTML = milliseconds[0]; 
  milUniElement.innerHTML = milliseconds[1]; 
}

function printSplit() {
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = splitTime;
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = '';
  printTime();
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    // Start the chronometer
    chronometer.start(printTime); // Pass printTime to update the display every interval
    setStopBtn(); // Change the button to "STOP"
    setSplitBtn(); // Change the right button to "SPLIT"
  } else {
    // Stop the chronometer
    chronometer.stop(); // Stop the interval
    setStartBtn(); // Change the button to "START"
    setResetBtn(); // Change the right button to "RESET"
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    // Reset the chronometer
    chronometer.reset(); 
    clearSplits(); 
    printTime(); 
  } else if (btnRightElement.classList.contains('split')) {
    // Record a split time
    printSplit(); 
  }
});
