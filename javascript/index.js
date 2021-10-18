const chronometer = new Chronometer();
let runningChronometer = false;

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
  const timeToPrint = setSplitBtn();
  minDecElement.textContent = timeToPrint[0];
  minUniElement.textContent = timeToPrint[1];
  secDecElement.textContent = timeToPrint[3];
  secUniElement.textContent = timeToPrint[4];
}

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds(aChrono) {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newSplit = document.createElement('li');
  newSplit.innerText = setSplitBtn();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  runningChronometer = false;
}

function setSplitBtn() {
  return chronometer.split();
}

function setStartBtn() {
  chronometer.start(printTime());
  runningChronometer = true;
}

function setResetBtn() {
  chronometer.reset();
}

btnLeftElement.addEventListener('click', () => {
  if(runningChronometer) {
    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
    setStopBtn();
    return;
  }
  btnLeftElement.textContent = 'STOP';
  btnRightElement.textContent = 'SPLIT';
  setStartBtn();
});


btnRightElement.addEventListener('click', () => {
  if(runningChronometer) {
    printSplit();
    return;
  }
  clearSplits()
  setResetBtn();
});
