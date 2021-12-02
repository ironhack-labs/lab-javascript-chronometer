const chronometer = new Chronometer();

// get the buttons testing:
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
  printMilliseconds();
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
  let milliseconds = chronometer.milliseconds.toString().split('');
  if (milliseconds.length < 2) {
    milUniElement.textContent = 0;
    milDecElement.textContent = milliseconds[0];
  } else {
    milUniElement.textContent = milliseconds[1];
    milDecElement.textContent = milliseconds[0];
  }
  // console.log(milliseconds);
  // ... your code goes here
}

function printSplit() {
  let splitTimeLi = document.createElement('li');
  let newChild = `${chronometer.split()}`;

  splitTimeLi.textContent = newChild;

  splitsElement.appendChild(splitTimeLi);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.textContent = 'START';

  btnRightElement.className = 'btn reset';
  btnRightElement.textContent = 'RESET';
  chronometer.stop();
  // ... your code goes here
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.textContent = 'SPLIT';
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.textContent = 'STOP';

  chronometer.start(printTime);
  // ... your code goes here
}

function setResetBtn() {
  chronometer.currentTime = 0;
  chronometer.milliseconds = 0;
  printTime();
  printMilliseconds();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    setStartBtn();
    setSplitBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.textContent === 'SPLIT') {
    printSplit();
  } else {
    setResetBtn();
  }
});
