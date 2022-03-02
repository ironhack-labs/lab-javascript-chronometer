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
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  // ... your code goes here
  minDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(0)
  minUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(1)
}

function printSeconds() {
  // ... your code goes here
  secDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(0)
  secUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(1)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  milDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getCentiseconds()).charAt(0)
  milUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getCentiseconds()).charAt(1)
}

function printSplit() {
  // ... your code goes here
  split = document.createElement("li")
  split.textContent = chronometer.split()
  splitsElement.appendChild(split)
}

function clearSplits() {
  // ... your code goes here
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild)
  }
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn stop'
  btnLeftElement.textContent = 'STOP'
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.className = 'btn split'
  btnRightElement.textContent = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn start'
  btnLeftElement.textContent = 'START'
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.className = 'btn reset'
  btnRightElement.textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  btnClass = btnLeftElement.className
  if(btnLeftElement.className === 'btn start'){
    setStopBtn()
    setSplitBtn()
    chronometer.start()
  }
  else {
    setResetBtn()
    setStartBtn()
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.className === 'btn split'){
    printSplit()
  }
  else {
    chronometer.reset()
    clearSplits()
  }
});

setInterval(printTime,100)