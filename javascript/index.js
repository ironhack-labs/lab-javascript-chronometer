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
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

function printSplit() {
  // ... your code goes here
  const li = document.createElement('li');
  li.textContent = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.replace('btn start', 'btn stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.replace('btn reset', 'btn split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.replace('btn stop', 'btn start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.replace('btn split', 'btn reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('btn start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnRightElement.classList.contains('btn split')) {
    printSplit();
  } else {
    clearSplits();
    chronometer.reset();
    printTime();
  }

});
