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
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  const formattedMinutes = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.textContent = formattedMinutes[0];
  minUniElement.textContent = formattedMinutes[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const formattedSeconds = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.textContent = formattedSeconds[0];
  secUniElement.textContent = formattedSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitTime = chronometer.split();
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.innerHTML = splitTime;
  splitsElement.appendChild(listItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    // Start button is clicked
    chronometer.start(() => {
      // Callback function to update UI every second
      printTime();
    });
    setStopBtn();
  } else {
    // Stop button is clicked
    chronometer.stop();
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    // Reset button is clicked
    chronometer.reset();
    clearSplits();
    setResetBtn();
  } else {
    // Split button is clicked
    printSplit();
    setSplitBtn();
  }
});
