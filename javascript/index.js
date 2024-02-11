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

function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds(seconds) {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {

  // ... your code goes here
}

function printSplit() {
  const splitLi = document.createElement('li');
  splitLi.textContent = chronometer.split();
  splitsElement.appendChild(splitLi);
}

function clearSplits() {
  splitsElement.innerHTML='';
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn(printTime) {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn reset'){
    chronometer.reset(printTime);
    clearSplits();
  } else {
    printSplit();
  }
});

//TO-DO - Throttling: prevent unwanted clicks
/*
let isClickable = true;

function handleClick() {
    if (!isClickable) {
        return;
    }

    // Your click handler logic goes here
    console.log('Button clicked');

    // Prevent further clicks for a specified time interval
    isClickable = false;
    setTimeout(() => {
        isClickable = true;
    }, 300); // Adjust the throttle interval as needed
}

// Example usage:
const button = document.getElementById('myButton');
button.addEventListener('click', handleClick);
*/
