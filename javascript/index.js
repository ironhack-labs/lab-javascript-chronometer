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
  secDec.innerText = printSeconds()[0]
  secUni.innerText = printSeconds()[1]
  minDec.innerText = printMinutes()[0]
  minUni.innerText = printMinutes()[1]
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes())
   
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds())
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
  if (btnLeft.classList.contains("start")) {
    btnLeft.className = "btn stop"
    btnLeft.innerHTML = "STOP"
    btnRight.className = "btn split"
    btnRight.innerHTML = "SPLIT"
    chronometer.startClick()
    printTime()
  }

  else if (btnLeft.classList.contains("stop")) {
    btnLeft.className = "btn start"
    btnLeft.innerHTML = "START"
    btnRight.className = "btn reset"
    btnRight.innerHTML = "RESET"
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick()  
  }
  else if (btnRight.classList.contains("split")) {
    chronometer.splitClick()  
  }
});
