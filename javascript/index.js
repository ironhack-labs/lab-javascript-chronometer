// const Chronometer = require("./chronometer");

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
let time = chronometer.split();
minDecElement.innerHTML = time[0];
minUniElement.innerHTML = time[1];
secDecElement.innerHTML = time[3];
secUniElement.innerHTML = time[4];
}

function printMinutes() {
  return chronometer.getMinutes
}

function printSeconds() {
  return chronometer.getSeconds
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
 let status = btnLeftElement.getAttribute("class");
 if (status == "btn start") {
   btnLeftElement.setAttribute("class", "btn stop");
   btnLeftElement.innerHTML = "STOP"
 } else {
  btnLeftElement.setAttribute ("class", "btn start");
  btnLeftElement.innerHTML = "START"
 }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  let status = btnRightElement.getAttribute("class");
 if (status == "btn split") {
   btnRightElement.setAttribute("class", "btn reset");
   btnRightElement.innerHTML = "RESET"
 } else {
  btnRightElement.setAttribute ("class", "btn split");
  btnRightElement.innerHTML = "SPLIT"
 }
});

