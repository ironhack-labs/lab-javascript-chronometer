//const Chronometer = require('./chronometer');

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

  //change a second
  chronometer.start(() => {
    printSeconds();
    printMinutes();
  });
}

function printMinutes() {
  // ... your code goes here
  minUniElement.innerText = chronometer.split()[1];
  minDecElement.innerText = chronometer.split()[0];
}

function printSeconds() {
  // ... your code goes here
  secUniElement.innerText = chronometer.split()[4];
  secDecElement.innerText = chronometer.split()[3];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const newSplit = document.createElement('li');
  newSplit.innerText = chronometer.split();
  document.querySelector('#splits').appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.add('split');
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('stop');
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.remove('split');
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    setSplitBtn();

    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  printSplit();
});
