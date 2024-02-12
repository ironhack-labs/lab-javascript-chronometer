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

//will print minutes and seconds if we pass the flag as true
//otherwise, will render the milliseconds
function printTime({minutes = null, seconds = null, milliSeconds = null, flag = false}) {
  if(flag){
    printMinutes(minutes);
    printSeconds(seconds);
    printMilliSeconds(milliSeconds);
  } else {
    printMilliSeconds(milliSeconds);
  }
}

function printMinutes(minutes) {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds(seconds) {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1];
}

function printMilliSeconds(milliSeconds) {
  console.log(chronometer.milliSeconds);
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(milliSeconds)[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(milliSeconds)[1];
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
