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


function leftButtonClicked() {
  
}
// I am outside of the instance of the object (class), so
// I cannot access it with this., I need the chronemeter
function printTime() {
  
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  
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
  if(btnLeftElement.className === 'btn start') {
    this.start(callback) 
  } else if(btnLeftElement.className === 'btn stop') {
    this.stop()
  }
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  console.log("Hi")
  console.log(btnLeftElement.className === 'btn start')
  if(btnLeftElement.className === 'btn start') {
    btnLeftElement.className = 'btn stop'
    btnLeftElement.innerText = 'STOP'
    btnRightElement.innerText = 'SPLIT'
    btnRightElement.className = 'btn split'

  } else if(btnLeftElement.className === 'btn stop') {
    btnLeftElement.className = 'btn start'
    btnLeftElement.innerText = 'START'
    btnRightElement.innerText = 'RESET'
    btnRightElement.className = 'btn reset'
  } 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className === 'btn split') {
  const newListElement = document.createElement('li')
  newListElement.innerText = chronometer.start(callback)
  splitsElement.appendChild(newListElement)
  } else if(btnRightElement.className === 'btn reset' && btnLeftElement.className === 'btn stop') {
    chronometer.reset()
  }
});
