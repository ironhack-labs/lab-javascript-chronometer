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

let digitsRefreshIntervalId = null;

function printTime() {
  // ... your code goes here
  printSeconds();
  printMinutes();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.getMinutes();
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.getSeconds();
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  //take the last digit of the time => getMillisecondss() second % 10
}

function printSplit() {
  // ... your code goes here
  const singleSplit = document.createElement('li');
  singleSplit.innerText = `${chronometer.split()}`;
  splitsElement.appendChild(singleSplit);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerText = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.toggle('split');
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.toggle('split');
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerText === 'START') {
    chronometer.start(); // This is protected from multiple starts
    if (!digitsRefreshIntervalId) {
      digitsRefreshIntervalId = setInterval(() => printTime(), 1000); // This is protected from multiple starts
    }
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();

    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'SPLIT') {
    printSplit();
  } else {
    clearSplits();
    chronometer.reset();
  }
});
