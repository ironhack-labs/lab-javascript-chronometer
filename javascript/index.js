const Chronometer = require("./chronometer");

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
  getMinutes()
  getSeconds() 

  
}

function printMinutes() { 
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]; 
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];

  
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]; 
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
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
  if(btnLeftElement.innerText === "START"){
    btnLeftElement.innerText = "STOP";
    btnLeftElement.className = "btn stop";
    chronometer.start(printTime);
  } else{
    btnLeftElement.innerText = "START";
    btnLeftElement.className = "btn start";
  }
}
  // .className
  // .classList --> easier

  // elm.classList.add("new-class")
  // elm.classList.remove("old-class")
  // elm.classList.toggle("my-class")

  // if(){
  //   chronometer.start(printTime);
  // }

);

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.toggle(=== "RESET"))
 
  // ... your code goes here
});
