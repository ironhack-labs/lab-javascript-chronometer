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

  secUni.innerText = chronometer.currentTime
    console.log(chronometer.currentTime)
  

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
  // ... your code goes here

  const context = btnLeft.innerText
  if (context.toLowerCase() == 'start') {
    btnLeft.innerText = 'STOP'
    btnLeft.className = 'btn  stop'
    chronometer.startClick(printTime)
  } else {
    btnLeft.innerText = 'START'
    btnLeft.className = 'btn  start'
    chronometer.stopClick()
    
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  const context = btnRight.innerText
  if (context == 'RESET') {
    btnRight.innerText = 'SPLIT'
    btnRight.className = 'btn split'
  } else {
    btnRight.innerText = 'RESET'
    btnRight.className = 'btn reset'
  }
    
});
