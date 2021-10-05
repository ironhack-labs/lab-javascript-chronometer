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
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  return (minUniElement.innerText = `${chronometer.getMinutes()}`);
}

function printSeconds() {
  return (secUniElement.innerText = `${chronometer.getSeconds()}`);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splitsElement.innerHTML += `<p>${chronometer.split()}</p>`;
}

function clearSplits() {
  splitsElement.innerHTML = ``;
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  chronometer.split();
  printSplit();
}

function setStartBtn() {
  chronometer.start();
  printTime();
}

function setResetBtn() {
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    setStartBtn();
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.innerHTML = 'SPLIT';
  } else if (btnLeftElement.innerHTML === 'STOP') {
    setStopBtn();
    btnLeftElement.innerHTML = 'START';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET') {
    setResetBtn();
    btnRightElement.innerHTML = 'SPLIT';
  } else if (
    btnRightElement.innerHTML === 'SPLIT' &&
    btnLeftElement.innerHTML === 'STOP'
  ) {
    setSplitBtn();
  } else if (
    btnRightElement.innerHTML === 'SPLIT' &&
    btnLeftElement.innerHTML === 'START'
  ) {
    clearSplits();
    btnRightElement.innerHTML = 'RESET';
  }
});
