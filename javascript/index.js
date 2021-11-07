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

let printingInterval;

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minUniElement.innerText = chronometer.getMinutes() % 10;
  minDecElement.innerText = Math.floor(chronometer.getMinutes() / 10);
}

function printSeconds() {
  secUniElement.innerText = chronometer.getSeconds() % 10;
  secDecElement.innerText = Math.floor(chronometer.getSeconds() / 10);
}

// ==> BONUS
function printMilliseconds() {
  // your code goes here
}

function printSplit() {
  const child = document.createElement('li');
  const split = chronometer.split();

  child.innerText = split;
  splitsElement.appendChild(child);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerText = 'START';
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerText = 'SPLIT';
}

function setResetBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    printingInterval = setInterval(() => {
      printTime();
    }, 1);
    chronometer.start();
    setStopBtn();
    setSplitBtn();
  } else {
    clearInterval(printingInterval);
    printingInterval = undefined;
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    chronometer.stop();
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
