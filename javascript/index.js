// const Chronometer = require("./chronometer");

const chrono = new Chronometer();

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
  printCentiseconds();
  printSeconds();
  printMinutes();
}

function printSeconds() {
  // ... your code goes here
  const seconds = chrono.getSeconds();
  const seconds2Dig = chrono.computeTwoDigitNumber(seconds);

  secUniElement.textContent = seconds2Dig.charAt(1);
  secDecElement.textContent = seconds2Dig.charAt(0);
}

function printMinutes() {
  // ... your code goes here
  const minutes = chrono.getMinutes();
  const minutes2dig = chrono.computeTwoDigitNumber(minutes);

  minUniElement.textContent = minutes2dig.charAt(1);
  minDecElement.textContent = minutes2dig.charAt(0);
}

// ==> BONUS
function printCentiseconds() {
  // ... your code goes here
  const centiseconds = chrono.getCentiseconds()
  console.log('centiseconds', centiseconds);
  const centiseconds2dig = chrono.computeTwoDigitNumber(centiseconds);

  milUniElement.textContent = centiseconds2dig.charAt(1);
  milDecElement.textContent = centiseconds2dig.charAt(0);

}

function printSplit() {
  // ... your code goes here
  const mySplitTimeString = chrono.split();
  // console.log(mySplitTimeString);
  const mySplitTimeLi = document.createElement('li');

  mySplitTimeLi.textContent = mySplitTimeString;

  splitsElement.appendChild(mySplitTimeLi);
}

function clearSplits() {
  // ... your code goes here
  const allMyLi = document.querySelectorAll('#splits li');
  // console.log('allMyLi', allMyLi);
  allMyLi.forEach((li) => li.remove());
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList = 'btn split';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.textContent === 'START') {
    chrono.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chrono.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.textContent === 'SPLIT') {
    printSplit();
  } else {
    chrono.reset();
    clearSplits();
  }
});
