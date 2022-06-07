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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerHTML = minutes.charAt(0)
  minUniElement.innerHTML = minutes.charAt(1)
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerHTML = seconds.charAt(0)
  secUniElement.innerHTML = seconds.charAt(1)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let listItem = document.createElement('li')
  listItem.innerHTML = chronometer.split()
  splitsElement.appendChild(listItem)
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'START'
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'STOP'
  printTime()
}

function setResetBtn() {
  chronometer.reset()
  printTime()
  clearSplits()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML == 'START') {
    chronometer.start(setStartBtn)
    btnRightElement.innerHTML = 'SPLIT'
  }  
  else if (btnLeftElement.innerHTML == 'STOP') {
    chronometer.stop()
    setStopBtn()
    btnRightElement.innerHTML = 'RESET'
  }  
  btnLeftElement.classList.toggle('stop')
  btnRightElement.classList.toggle('split')
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML == 'RESET') {
    setResetBtn()
  }
  else if (btnRightElement.innerHTML == 'SPLIT') {
    setSplitBtn()
  }
});
