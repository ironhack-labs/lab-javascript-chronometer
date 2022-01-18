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
  // ... your code goes here
  
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
  secDecElement = chronometer.splitTime.charAt(4)
  secUniElement = chronometer.splitTime.charAt(5)
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
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
btnLeftElement.addEventListener('click',  () => {
  // ... your code goes here
  if (btnLeftElement.innerHTML == "START") {

    btnLeftElement.innerHTML = "STOP";
    btnLeftElement.classList.replace('start', 'stop');
     btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.classList.replace('reset', 'split');
    chronometer.start()
    chronometer.getMinutes()
    chronometer.getSeconds()
    chronometer.computeTwoDigitNumber()
    chronometer.split()

  } else {
    
    btnLeftElement.innerHTML = "START"
    btnLeftElement.classList.replace('stop', 'start');
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.classList.replace('split', 'reset');
    chronometer.stop()
    
  }

  



  
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

 
});
