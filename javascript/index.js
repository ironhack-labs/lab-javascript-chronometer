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
  minDecElement.textContent = Math.floor(chronometer.getMinutes() / 10)
  minUniElement.textContent = chronometer.getMinutes() % 10
}

function printSeconds() {
  secDecElement.textContent = Math.floor(chronometer.getSeconds() / 10)
  secUniElement.textContent = chronometer.getSeconds() % 10
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const laps = document.createElement('li')
  laps.textContent = chronometer.split()
  splitsElement.appendChild(laps)
}

function clearSplits() {
  
}

function setStopBtn() {
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  btnLeftElement.innerText = 'STOP'
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  btnRightElement.textContent = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.add('start')
  btnLeftElement.classList.remove('stop')
  btnLeftElement.innerText = 'START'
}

function setResetBtn() {
  btnRightElement.classList.add('reset')
  btnRightElement.classList.remove('split')
  btnRightElement.textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn()
    setSplitBtn()
    chronometer.start(printTime)
    printTime()
    } else {
    setStartBtn()
    setResetBtn()
    chronometer.stop()
    }
  });

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')) {
    chronometer.reset()
    printTime()
    } else {
      printSplit()
    }
});
