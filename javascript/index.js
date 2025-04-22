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
  const min = chronometer.getMinutes();
  const minToStr = chronometer.computeTwoDigitNumber(min);
  minDecElement.textContent = minToStr[0];
  minUniElement.textContent = minToStr[1];
}

function printSeconds() {
  // ... your code goes here
  const sec = chronometer.getSeconds();
  const secStr = chronometer.computeTwoDigitNumber(sec);
  console.log(secStr)
  secDecElement.textContent = secStr[0];
  secUniElement.textContent = secStr[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
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
  btnLeftElement.classList.add('stop');
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.add('split');
  btnRightElement.textContent = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('stop');
  btnLeftElement.textContent = 'START';

}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.remove('split');
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('stop')) {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  } else {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime)
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else {
    chronometer.reset();
    minDecElement.textContent = '0';
    milUniElement.textContent = '0';
    secDecElement.textContent = '0';
    secUniElement.textContent = '0';
    clearSplits();
  }
});
