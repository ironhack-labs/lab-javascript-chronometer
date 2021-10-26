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

function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  
  minDecElement.innerHTML = minutes [0];
  minUniElement.innerHTML = minutes [1];

}

function printSeconds(seconds) {
  
  secDecElement.innerHTML = seconds[0];
  secDecElement.innerHTML = seconds[1];

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
  let stopBtn = document.querySelector("#btnLeft");
  stopBtn.setAttribute('class', 'btn stop')
  stopBtn.textContent = "STOP";
}

function setSplitBtn() {
  let splitBtn = document.querySelector('#btnRight');
  splitBtn.setAttribute('class', 'btn split');
  splitBtn.textContent = "SPLIT";
}

function setStartBtn() {
  
  let startBtn = document.querySelector('#btnLeft');
  startBtn.setAttribute('class', 'btn start');
  startBtn.textContent = "START";

}

function setResetBtn() {
  let resetBtn = document.querySelector('#btnRight');
  resetBtn.setAttribute('class', 'btn reset');
  resetBtn.textContent = "RESET"

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
/*   if (btnRightElement.className === 'btn stop'){
    btnLeftElement.classList.toggle("btn start");
  } else {
    btnLeftElement.classList.toggle("btn stop");
  } */

  if (btnLeftElement.className === 'btn stop') {
    setStartBtn();
  } else {
    setStopBtn();
  }

  

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  /* if (btnRightElement.className === 'btn reset') {
    btnRightElement.classList.toggle("btn split");
  } else {
    btnRightElement.classList.toggle("btn reset");
  } */


  if (btnRightElement.className === 'btn reset') {
    setSplitBtn();
  } else {
    setResetBtn();
  }

  

});
