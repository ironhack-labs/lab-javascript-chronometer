//const Chronometer = require("./chronometer");

chronometer = new Chronometer();
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
  minUniElement.textContent = chronometer.getMinutes([1])
  minDecElement.textContent = chronometer.getMinutes([0])
}

function printSeconds() {
  // ... your code goes here
  secUniElement.innerHTML = chronometer.getSeconds([1])
  secDecElement.innerHTML = chronometer.getSeconds([0])
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
 let setStop = chronometer.stop() 
 return setStop
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  
  let setStart = chronometer.start()
  // ... your code goes here
 return setStart
}

function setResetBtn() {
  // ... your code goes here
 
let setReset = chronometer.reset() 
  return setReset
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes 
  if(btnLeftElement.innerHTML == "START" ){
    btnLeftElement.textContent= "STOP"
    btnLeftElement.style.backgroundColor = "#FF0000"
    btnRightElement.textContent= "SPLIT"
    btnRightElement.style.backgroundColor = "#0851ab"
    setStartBtn()
  }else{
    btnLeftElement.textContent= "START"
    btnLeftElement.style.backgroundColor = "#5fca5f"
     btnRightElement.textContent= "RESET"
    btnRightElement.style.backgroundColor = "#908e8e";
    setStopBtn()
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.textContent == "RESET"){
    setResetBtn()
  }else{

  }
});