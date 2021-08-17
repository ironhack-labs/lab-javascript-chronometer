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
  printMilliseconds()
}

function printMinutes() {

  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minutes = minutes.toString();

  let firstNumber = minutes[0];
  let secondNumber = minutes[1];

  minDecElement.innerText = firstNumber;
  minUniElement.innerText = secondNumber;

  return minutes;
}

function printSeconds() {

  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  seconds = seconds.toString();
  
  let firstNumber = seconds[0];
  let secondNumber = seconds[1];

  secDecElement.innerText = firstNumber;
  secUniElement.innerText = secondNumber;

  return seconds;
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milliseconds = milliseconds.toString();
  
  let firstNumber = milliseconds[0];
  let secondNumber = milliseconds[1];

  milDecElement.innerText = firstNumber;
  milUniElement.innerText = secondNumber;

  return milliseconds;
}

function printSplit() {
  const parent = splitsElement;
  const child = document.createElement('li');
  child.innerHTML = (`${printMinutes()}:${printSeconds()}:${printMilliseconds()}`);
  parent.appendChild(child);
}

function clearSplits() {
  const parent = document.getElementById('splits');
  const child = document.querySelectorAll('ol li');
  for (let i = 0; i < child.length; i++) {
    parent.removeChild(child[i]);
  }
}

function setStopBtn() {
  if (btnLeftElement.innerText = 'START') {
    btnLeftElement.setAttribute('class', 'btn stop');
    btnLeftElement.innerText = 'STOP';
    chronometer.start(printTime);
  }
}

function setSplitBtn() {
  if (btnRightElement.innerText = 'RESET') {
    btnRightElement.setAttribute('class', 'btn split');
    btnRightElement.innerText = 'SPLIT';
  }
}

function setStartBtn() {
  if (btnLeftElement.innerText = 'STOP') {
    btnLeftElement.setAttribute('class', 'btn start');
    btnLeftElement.innerText = 'START';
    chronometer.stop();
  }
}

function setResetBtn() {
  if (btnRightElement.innerText = 'SPLIT') {
    btnRightElement.setAttribute('class', 'btn reset');
    btnRightElement.innerText = 'RESET';
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    minDecElement.innerText = 0;
    minUniElement.innerText = 0;
    secDecElement.innerText = 0;
    secUniElement.innerText = 0;
    clearSplits()
  } else {
    printSplit();
  }
});
