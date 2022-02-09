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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];

}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  // ... your code goes here
  const listItem = `<li>${chronometer.split()}</li>`;
  splitsElement.insertAdjacentHTML('beforeend', listItem);
}

function clearSplits() {
  // ... your code goes here
  while (splitsElement.firstChild) {
    splitsElement.lastChild.remove();
  }
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop()
  btnLeftElement.innerText = 'START';
  btnRightElement.innerText = 'RESET';
  toggleButtonColors();
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
    chronometer.start(printTime);
    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';
    toggleButtonColors();
}

function setResetBtn() {
  chronometer.reset()
  printTime();
  clearSplits()

}

function toggleButtonColors() {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');

  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerText === 'START') {
    setStartBtn()
    
  } else if (btnLeftElement.innerText === 'STOP') {
    setStopBtn()
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    setResetBtn();
  } else if (btnRightElement.innerText === 'SPLIT') {
    setSplitBtn();
  }
    
});
