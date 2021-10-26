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
  let minutes = chronometer.getMinutes();
  
  minDecElement.textContent = minutes;
  minUniElement.textContent = minutes;
  console.log(minutes)
  //console.log()
}

function printSeconds() {
 let seconds = chronometer.getSeconds();

  secDecElement.textContent = seconds;
  secUniElement.textContent = seconds;

  console.log(seconds)
  //console.log()
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
  chronometer.stop();
}

function setSplitBtn() {
  chronometer.split();
}

function setStartBtn() {
  chronometer.start();
  printTime();
  console.log(printTime())
}

function setResetBtn() {
  chronometer.reset();
  //printTime();
  //clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  setStartBtn();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  setResetBtn()
});
