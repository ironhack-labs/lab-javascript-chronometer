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
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds(seconds) {
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds(milliseconds) {
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  let newSplit = document.createElement('li');
  newSplit.appendChild(document.createTextNode(chronometer.split()));
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  // document.querySelector('ol').innerHTML = '';
  splitsElement.replaceChildren('');
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
  let action = btnLeftElement.textContent;
  switch (action) {
      case 'START':
        chronometer.start(printTime);
        // btnLeftElement.innerHTML = "STOP";
        btnLeftElement.textContent = "STOP";
        btnLeftElement.classList.toggle('stop')
        //btnLeftElement.setAttribute("class","btn stop");
        // btnRightElement.innerHTML = "SPLIT";
        btnRightElement.textContent = "SPLIT";
        btnRightElement.classList.toggle('split');
        // btnRightElement.setAttribute("class","btn split");
        break;
    case 'STOP':
        chronometer.stop();
        btnLeftElement.textContent = "START";
        btnLeftElement.setAttribute("class","btn start");
        btnRightElement.textContent = "RESET";
        btnRightElement.setAttribute("class","btn reset");
        break;
    default:
        throw new Error('Unrecognized action');
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', (e) => {
  let action = btnRightElement.classList.contains('split')
  
  if(action){
      printSplit();
  }else{ 
    clearSplits();
    printSeconds('00');
    printMinutes('00');
    printMilliseconds('00');
    chronometer.reset();
  }

});

function eventListenerFirstDraft() {
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
}