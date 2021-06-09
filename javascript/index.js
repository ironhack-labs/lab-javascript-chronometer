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
  console.log(chronometer.computeTwoDigitNumber(chronometer.currentTime))
  printMinutes()
  printSeconds()
  // ... your code goes here
}

function printMinutes() {
  minDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
  minUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
  // ... your code goes here
}

function printSeconds() {
  secDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
  secUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
  // ... your code goes here
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

  
  const classL = btnLeftElement.classList

    classL.remove('start') 
    classL.add('stop')
    btnLeftElement.textContent = 'STOP'

    chronometer.start(printTime)
    
    
    
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {

  const classL = btnLeftElement.classList

    classL.remove('stop')
    classL.add('start')
    btnLeftElement.textContent = 'START'

    chronometer.stop()
    printTime()
    
  
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  const classL = btnLeftElement.classList

  if (classL.contains('stop')) {
    setStartBtn()
    
  } else {
    setStopBtn()
  }
  
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  chronometer.stop()
  
  // ... your code goes here
});
