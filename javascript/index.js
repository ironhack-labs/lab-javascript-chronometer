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
}
function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const containerTime = document.getElementById('splits');
  const li = document.createElement('li');
  li.innerHTML = setSplitBtn();
  containerTime.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  const containerTime = document.getElementById('splits');
  containerTime.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  return chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
  return chronometer.split();
}

function setStartBtn() {
  // ... your code goes here
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
  clearSplits();
  chronometer.reset();
  minDecElement.innerHTML = 0;
  minUniElement.innerHTML = 0;
  secDecElement.innerHTML = 0;
  secUniElement.innerHTML = 0;
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let statusLeft = btnLeftElement.getAttribute('class');
  // ... your code goes here
  if (statusLeft == 'btn start') {
    btnLeftElement.setAttribute('class', 'btn stop');
    btnLeftElement.innerHTML = 'STOP';

    btnRightElement.setAttribute('class', 'btn split');
    btnRightElement.innerHTML = 'SPLIT';
    setStartBtn();
  } else {
    btnLeftElement.setAttribute('class', 'btn start');
    btnLeftElement.innerHTML = 'START';
    setStopBtn();
    btnRightElement.setAttribute('class', 'btn reset');
    btnRightElement.innerHTML = 'RESET';
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  let statusRight = btnRightElement.getAttribute('class');
  if (statusRight == 'btn reset') {
    setResetBtn();
  } else {
    printSplit();
  }
});
