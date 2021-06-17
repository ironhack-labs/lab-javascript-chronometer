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
  printMinutes()
  printSeconds()
  
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement('li')
  li.innerHTML = chronometer.split()
  splitsElement.appendChild(li)
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.classList.replace('start', 'stop')
  btnLeftElement.innerHTML = 'STOP'
  
}

function setSplitBtn() {
  btnRightElement.classList.replace('reset', 'split')
  btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.replace('stop', 'start')
  btnLeftElement.innerHTML = 'START'
  
  
}

function setResetBtn() {
  btnRightElement.classList.replace('split', 'reset')
  btnRightElement.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime)
    
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('split')){
    printSplit()
  } else { 
   
    clearSplits()
    chronometer.reset()
    
  }
});
