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

}

function printMinutes() {

}

function printSeconds() {
const seconds = chronometer.getSeconds();
secDecElement.innerText = chronometer.twoDigitsNumber(seconds);

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
btnLeftElement.className = "btn start"
btnLeftElement.innerText = "START"
btnRightElement.className = "btn reset"
btnRightElement.innerText = "RESET"

}

function setSplitBtn() {
btnRightElement.className ="btn split"
btnRightElement.innerText ="SPLIT"
}

function setStartBtn() {
btnLeftElement.className = "btn stop"
btnRightElement.className = "btn split"
btnLeftElement.innerText = "STOP"
btnRightElement.innerText = "SPLIT"
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if(btnLeftElement.innerText === "START"){
  setStartBtn();
} else {
  setStopBtn();
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
