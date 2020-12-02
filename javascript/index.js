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
  document.getElementById('btnLeft').className = 'btn stop'
  document.getElementById('btnLeft').textContent = 'STOP'
}

function setSplitBtn() {
  document.getElementById('btnRight').className = 'btn split'
  document.getElementById('btnRight').textContent = 'SPLIT'
}

function setStartBtn() {
  document.getElementById('btnLeft').className = 'btn start'
  document.getElementById('btnLeft').textContent = 'START'
}

function setResetBtn() {
  document.getElementById('btnRight').className = 'btn reset'
  document.getElementById('btnRight').textContent = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if(document.getElementById('btnLeft').textContent === 'START'){
    chronometer.startClick() 
    setStopBtn() 
    setSplitBtn()
  }
  else{
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  document.getElementById('btnRight').textContent === 'RESET' ? chronometer.resetClick() : chronometer.splitClick()
  
});


