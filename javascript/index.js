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

  
}

function printMinutes() {
 
}

function printSeconds() {
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
  +-
  btnLeftElement.setAttribute("class", "btn start")
  chronometer.start()
  console.log("funciona")
  btnLeftElement.setAttribute("class", "btn stop")
  chronometer.stop()
  console.log("funciona1")

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  +-
  btnRightElement.setAttribute("class", "btn split")
  chronometer.split()
  console.log("funciona3")
  btnRightElement.setAttribute("class", "btn reset")
  chronometer.reset()
  console.log("funciona4")
});
