const chronometer = new Chronometer();
// This variable keeps track of the status of the chronometer 
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
  // Each function returns a 2-digit string
  minDecElement.textContent = printMinutes()[0];
  minUniElement.textContent = printMinutes()[1];
  secDecElement.textContent = printSeconds()[0];
  secUniElement.textContent = printSeconds()[1];
  milDecElement.textContent = printMilliseconds()[0];
  milUniElement.textContent = printMilliseconds()[1];
}

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
}

function printSplit() {
  // New <li>
  let newSplit = document.createElement('li');
  // Gets the text to be added from the function to the new element
  newSplit.innerText = setSplitBtn();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // Clears the <ol> element
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
  chronometer.start(printTime);
  runningChronometer = true;
}

function setResetBtn() {
  chronometer.reset();
  // To print all 0s, since the count has already been reset
  printTime();
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
