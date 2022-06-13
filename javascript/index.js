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
  printSeconds();
  printMinutes();
}




function printMinutes() {
  let minutes = chronometer.getMinutes();
  let twoDigitMin = chronometer.computeTwoDigitNumber(minutes);

  let firstDigitMin = twoDigitMin.toString().charAt(0);
  let secondDigitMin = twoDigitMin.toString().charAt(1);

  minDecElement.textContent = firstDigitMin;
  minUniElement.textContent = secondDigitMin;
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let twoDigitSeg = chronometer.computeTwoDigitNumber(seconds);

  let firstDigitSec = twoDigitSeg.toString().charAt(0);
  let secondDigitSec = twoDigitSeg.toString().charAt(1);

  secDecElement.textContent = firstDigitSec;
  secUniElement.textContent = secondDigitSec;
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

// Start/Stop Button vwhen clicked, the start button should invoke the chronometer's start method.
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop')
  btnRightElement.innerHTML = 'SPLIT'
    btnRightElement.classList.remove ('reset');
    btnRightElement.classList.add ('split')
  }
  
 else if (btnLeftElement.classList.contains('stop')) {
      chronometer.stop(printTime); 
      btnLeftElement.innerHTML = 'START'
      btnLeftElement.classList.remove('stop');
      btnLeftElement.classList.add('start')
      btnRightElement.innerHTML = 'RESET'
      btnRightElement.classList.remove('split')
      btnRightElement.classList.add('reset')
    };
    
  })
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
 if (btnRightElement.classList.contains('reset')) {
  chronometer.reset(printTime);
 }
    
})
