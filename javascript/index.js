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
}

function printMinutes() {
 // ... your code goes here
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
  btnLeft.classList.toggle('start')
  btnLeft.classList.toggle('stop')
  btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
  btnRight.classList.toggle('reset')
  btnRight.classList.toggle('split')
  btnRight.innerHTML = 'SPLIT' 
}

function setStartBtn() {
  btnLeft.classList.toggle('stop')
  btnLeft.classList.toggle('start')
  btnLeft.innerHTML = 'START'
}

function setResetBtn() {
  btnRight.classList.toggle('split')
  btnRight.classList.toggle('reset')
  btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML === 'START'){
    setSplitBtn()
    setStopBtn()
  }
  else {
    chronometer.stopClick
    setStartBtn()
    setResetBtn()
  }
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});

 