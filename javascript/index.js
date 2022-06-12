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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.split();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
  chronometer.reset();
  printTime();
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerText = 'STOP';
  btnLeft.classList.add('stop');
  btnLeft.classList.remove('start');
}

function setSplitBtn() {
  // ... your code goes here;
  btnRight.innerText = 'SPLIT';
  btnRight.classList.add('split');
  btnRight.classList.remove('reset');
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = 'START';
  btnLeft.classList.add('start');
  btnLeft.classList.remove('stop');
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = 'RESET';
  btnRight.classList.add('reset');
  btnRight.classList.remove('split');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnLeft.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }

  console.log(chronometer);
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnRight.innerHTML === 'RESET') {
    clearSplits();
    chronometer.reset();
  } else {
    printSplit();
  }
});
