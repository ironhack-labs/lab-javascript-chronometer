const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
console.log({Chronometer})
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  secUniElement = Chronometer.getSeconds()
  console.log(secUniElement)
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
  if(btnLeftElement.innerHTML == "START" ){
    btnLeftElement.textContent= "STOP"
    btnLeftElement.style.backgroundColor = "#FF0000"
    btnRightElement.textContent= "SPLIT"
    btnRightElement.style.backgroundColor = "#0851AB"
  } else {
    btnLeftElement.textContent= "START"
    btnLeftElement.style.backgroundColor = "#5FCA5F"
     btnRightElement.textContent= "RESET"
    btnRightElement.style.backgroundColor = "#908E8E";
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.innerHTML == "RESET" ){
    btnRightElement.textContent= "SPLIT"
    btnRightElement.style.backgroundColor = "#0851AB";
  }else{
    btnRightElement.textContent= "RESET"
    btnRightElement.style.backgroundColor = "#908E8E"
  }
});
