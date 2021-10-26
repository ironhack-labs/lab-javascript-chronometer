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
  setInterval(() => {

    printSeconds()
    printMinutes()
  }, 1000)
}
function printMinutes() {
  let minutes = chronometer.getMinutes();
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
let seconds = chronometer.getSeconds();
secDecElement.innerText = seconds[0]
secUniElement.innerText = seconds[1]
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
    btnLeftElement.innerText = 'STOP'
    btnLeftElement.className = 'btn stop'
 
}

function setSplitBtn() {

    btnRightElement.innerText = 'SPLIT'
    btnRightElement.className = 'btn split'
}

function setStartBtn() {
  btnLeftElement.innerText = 'START'
  btnLeftElement.className = 'btn start'
}

function setResetBtn() {
  btnLeftElement.innerHTML = 'RESET'
  btnLeftElement.className = 'btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
});
