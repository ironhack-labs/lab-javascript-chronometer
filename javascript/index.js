const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec'); // first digit
const minUniElement = document.getElementById('minUni'); // second digit
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');


function printTime() {
  printMinutes();
  printSeconds();
};

function printMinutes() {
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
};

function printSeconds() {
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
};

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
};

function printSplit() {
  let li = document.createElement('li');
  li.innerText = chronometer.split();
  splits.appendChild(li);
};

function clearSplits() {
  splitsElement.querySelectorAll('li').forEach((li) => {
    li.remove();
  });
};

function setStopBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerText = 'START';
};

function setSplitBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerText = 'RESET';
};

function setStartBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerText = 'STOP';
};

function setResetBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerText = 'SPLIT';
};

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStartBtn();
    setResetBtn();
  } else {
    chronometer.stop();
    setStopBtn();
    setSplitBtn();
  };
});
 
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else {
    chronometer.reset();
    clearSplits();
    printTime();
  };
});