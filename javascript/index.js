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

function undateTime() {
  intervalID = setInterval(() => {
    printTime();
  }, 1000);
}

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

function printSeconds() {
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
  chronometer.start();
  undateTime();
  runningChronometer = true;
}

function setResetBtn() {
  chronometer.reset();
}

btnLeftElement.addEventListener('click', () => {
  if(runningChronometer) {
    btnLeftElement.textContent = 'START';
    btnLeftElement.setAttribute('class', 'btn start');
    btnRightElement.textContent = 'RESET';
    btnRightElement.setAttribute('class', 'btn reset');
    setStopBtn();
    return;
  }
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.setAttribute('class', 'btn stop');
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.setAttribute('class', 'btn split');
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
