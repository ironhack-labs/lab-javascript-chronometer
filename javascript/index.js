// const Chronometer = require("./chronometer");

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
  let seconds      = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let minutes      = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  printMinutes(minutes);
  printSeconds(seconds);
  printMilliseconds(milliseconds);
}

function printMinutes(minutes) {
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds(seconds) {
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds(milliseconds) {
  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
}

function printSplit() {
  let splitOL  = document.querySelector('ol');
  let splitVal = chronometer.split();
  let newSplit = document.createElement('li');
  newSplit.appendChild(document.createTextNode(splitVal));
  splitOL.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  document.querySelector('ol').innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // btnLeftElement.className="btn stop";
  let action = btnLeftElement.innerHTML;
  switch (action) {
      case 'START':
        chronometer.start(printTime);
        btnLeftElement.innerHTML = "STOP";
        btnLeftElement.classList.toggle('stop')
        //btnLeftElement.setAttribute("class","btn stop");
        btnRightElement.innerHTML = "SPLIT";
        btnRightElement.classList.toggle('split');
        // btnRightElement.setAttribute("class","btn split");
        break;
    case 'STOP':
        chronometer.stop();
        btnLeftElement.innerHTML = "START";
        btnLeftElement.setAttribute("class","btn start");
        btnRightElement.innerHTML = "RESET";
        btnRightElement.setAttribute("class","btn reset");
        break;
    default:
        throw new Error('Unrecognized action');
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', (e) => {
  // console.log(e);
  let action = btnRightElement.innerHTML;
  switch (action) {
    case 'SPLIT':
        printSplit();
        break;
    case 'RESET':
        clearSplits();
        printSeconds('00');
        printMinutes('00');
        printMilliseconds('00');
        chronometer.reset();
        break;
    default:
        throw new Error('Unrecognized action');
        break;
  }

});
