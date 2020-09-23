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
  let stop = document.querySelector("btn start")
  stop.addEventListener("click", () => {
    
  
})
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
  btnLeft.innerText = "STOP"
  btnLeft.className = "btn stop"
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = "SPLIT"
  btnRight.className = "btn split"
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = "START"
  btnLeft.className = "btn start"
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = "RESET"
  btnRight.className = "btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerText==="START") {
    setStopBtn()
    setSplitBtn()
    //startClick() here??
  } else { 
    setStartBtn()
    setResetBtn()
    //stopClick() here??
  }
  setStopBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
