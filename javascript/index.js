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
  let minute = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerHTML = minute[0]
  minUniElement.innerHTML = minute[1] 
}

function printSeconds() {
  const seconds = chronometer.getSeconds()
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0]
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let split = chronometer.split()
  splitsElement.innerHTML += `<li class='split'>${split}</li>`
}

function clearSplits() {
  splitsElement.innerText = ''
}

function setStopBtn() {
  btnLeftElement.classList.replace('start', 'stop')
  btnLeftElement.innerText = 'STOP'
}

function setSplitBtn() {
  btnRightElement.classList.replace('reset', 'split')
  btnRightElement.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.replace('stop', 'start')
  btnLeftElement.innerText = 'START'
}

function setResetBtn() {
  btnRightElement.classList.replace('split', 'reset')
  btnRightElement.innerText = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')){
    setStopBtn()
    setSplitBtn()
    chronometer.start(printTime)
  }
  else if (btnLeftElement.classList.contains('stop')){
    setStartBtn()
    setResetBtn()
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')){
    printSplit()
  }
  else if (btnRightElement.classList.contains('reset')){
    chronometer.reset()
    minUniElement.innerHTML = '0';
    minDecElement.innerHTML = '0';
    secUniElement.innerHTML = '0';
    secDecElement.innerHTML = '0';
    milUniElement.innerHTML = '0';
    milDecElement.innerHTML = '0';
    clearSplits()
  }
}
);
