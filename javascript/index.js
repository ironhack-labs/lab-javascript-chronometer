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
  const minDecDigit = document.getElementById('minDec')
  const minUniDigit = document.getElementById('minUni')
  minDecDigit.innerText=chronometer.computeTwoDigitNumber()[0]
  minUniDigit.innerText=chronometer.computeTwoDigitNumber()[1]
}

function printSeconds() {
  const secDecDigit = document.getElementById('secDec')
  const secUniDigit = document.getElementById('secUni')
  secDecDigit.innerText=chronometer.computeTwoDigitNumber()[3]
  secUniDigit.innerText=chronometer.computeTwoDigitNumber()[4]
}

// ==> BONUS
function printMilliseconds() {
  
}

function printSplit() {
  const splitLine = document.createElement('li')
  splitLine.innerText=chronometer.computeTwoDigitNumber()
  document.querySelector('#splits').appendChild(splitLine)
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
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    console.log('start')
    chronometer.start()
    btnLeftElement.classList.remove('start')
    btnLeftElement.classList.add('stop')
    btnLeftElement.innerText='STOP'
    btnRightElement.classList.remove('reset')
    btnRightElement.classList.add('split')
    btnRightElement.innerText="SPLIT"
  }else{
    console.log('stop')
    chronometer.stop()
    btnLeftElement.classList.remove('stop')
    btnLeftElement.classList.add('start')
    btnLeftElement.innerText='START'
    btnRightElement.classList.remove('split')
    btnRightElement.classList.add('reset')
    btnRightElement.innerText="RESET"
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    chronometer.reset()
  }else{
    printSplit()
  }
});
