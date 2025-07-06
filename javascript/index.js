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
  printMinutes ()
  printSeconds ()
  printMilliseconds ()
  // ... your code goes here
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
  // ... your code goes here
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement('li')
  li.textContent = chronometer.split()
  splitsElement.appendChild(li)
  // ... your code goes here
}

function clearSplits() {
  splits.innerHTML = ''
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP'
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  // ... your code goes here
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT'
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.textContent = 'START'
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  // ... your code goes here
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET'
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
    }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset()
    printTime()
    clearSplits()
  } else {
    printSplit()
  }
});
