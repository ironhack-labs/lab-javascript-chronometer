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
  let min = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let seconde = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  minUniElement.textContent = min[1];
  minDecElement.textContent = min[0];
  secDecElement.textContent = seconde[0];
  secUniElement.textContent = seconde[1];
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milli = chronometer.computeTwoDigitNumber(chronometer.getMilli());
  milDecElement.textContent = milli[0];
  milUniElement.textContent = milli[1];
}

function printSplit() {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    let liElem = document.createElement('li');
    splitsElement.append(liElem);
    liElem.textContent = chronometer.split() + `: ${chronometer.currentMilli}`;
  }
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  printTime();
  splitsElement.innerHTML = '';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  // if (btnLeftElement.classList.toggle('start')) {
  //   btnLeftElement.classList.remove('stop');
  //   btnRightElement.classList.remove('split');
  //   btnRightElement.classList.add('reset');
  //   btnLeftElement.textContent = 'START';
  //   btnRightElement.textContent = 'RESET';
  //   chronometer.stop();
  // } else {
  //   chronometer.start();
  //   btnLeftElement.classList.add('stop');
  //   btnRightElement.classList.add('split');
  //   btnLeftElement.textContent = 'STOP';
  //   btnRightElement.textContent = 'SPLIT';
  // }
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.classList.remove('start');
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnLeftElement.classList.add('stop');
    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT';
    chronometer.start(printTime);
  } else {
    btnLeftElement.classList.add('start');
    btnRightElement.classList.add('reset');
    btnLeftElement.classList.remove('stop');
    btnRightElement.classList.remove('split');
    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnRightElement.classList.contains('reset')) {
    setResetBtn();
  } else {
    printSplit();
  }
});
