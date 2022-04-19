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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minUniElement.innerHTML = minutes[1];
  minDecElement.innerHTML = minutes[0];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secUniElement.innerHTML = seconds[1];
  secDecElement.innerHTML = seconds[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here

  let listItem = document.createElement('li');
  splitsElement.appendChild(listItem);
  listItem.innerHTML = chronometer.split();
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = ' ';
  chronometer.reset();
  printTime();
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
  chronometer.start(printTime);
}

function setSplitBtn() {
  // ... your code goes here

  chronometer.split(printSplit);
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
  chronometer.stop();
}

function setResetBtn() {
  // ... your code goes here

  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnLeftElement.className == 'btn start') {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.className === 'btn split') {
    printSplit();
  } else {
    setResetBtn();
  }
});
