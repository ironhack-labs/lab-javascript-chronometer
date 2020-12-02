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

  if(document.getElementById('btnLeft').textContent === 'START'){
    chronometer.startClick() 
    document.getElementById('btnLeft').className = 'btn stop'
    document.getElementById('btnLeft').textContent = 'STOP'
  }
  else{
    chronometer.stopClick()
    document.getElementById('btnLeft').className = 'btn start'
    document.getElementById('btnLeft').textContent = 'START'
  }  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if(document.getElementById('btnRight').textContent === 'RESET'){
    chronometer.resetClick()
    document.getElementById('btnRight').className = 'btn split'
    document.getElementById('btnRight').textContent = 'SPLIT'
  }
  else{
    chronometer.splitClick()
    document.getElementById('btnRight').className = 'btn reset'
    document.getElementById('btnRight').textContent = 'RESET'
  }
});


