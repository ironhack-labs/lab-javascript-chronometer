
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

}

function printMinutes() {
  // ... your code goes here
  console.log(chronometer.computeTwoDigitNumber(chronometer.getMinutes()));
}

function printSeconds() {
  // ... your code goes here
  console.log(chronometer.computeTwoDigitNumber(chronometer.getSeconds()))
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
  return chronometer.start() 
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  if(btnLeftElement.classList.contains("start")){
    btnLeftElement.classList.remove("start")
    btnLeftElement.classList.add("stop")
    btnLeftElement.innerText = 'STOP' 
    btnRightElement.classList.remove('reset')
    btnRightElement.classList.add('split')
    btnRightElement.innerText = 'SPLIT'
    console.log(setStartBtn())
  }else {
    btnLeftElement.classList.remove("stop")
    btnLeftElement.classList.add("start")
    btnLeftElement.innerText = 'STAR'
    btnRightElement.classList.remove('split')
    btnRightElement.classList.add('reset')
    btnRightElement.innerText = 'RESET'
  } 

  

  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
