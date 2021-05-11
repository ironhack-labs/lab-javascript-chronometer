const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  if(btnLeft.className === 'btn stop'){
    chronometer.startClick();
  }else{
    chronometer.stopClick();
  }
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  time = chronometer.splitClick();
  firstNumber = document.getElementById('minDec')
  firstNumber.innerText = time[0]
}

function printSeconds() {
  // ... your code goes here
  time = chronometer.splitClick();
  firstNumber = document.getElementById('secDec')
  firstNumber.innerText = time[3]
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
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.className === 'btn start'){
     btnLeft.innerText = 'STOP';
     btnLeft.className = 'btn stop';

  } else{
    btnLeft.innerText = 'START';
    btnLeft.className = 'btn start';
  }
 printTime();
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.className === 'btn reset'){
    btnRight.innerText = 'SPLIT';
    btnRight.className = 'btn split';
 } else{
   btnRight.innerText = 'RESET';
   btnRight.className = 'btn reset';
 }

});

// printMinutes();
// printSeconds();
