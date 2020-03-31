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

  secUni.innerText = chronometer.getSeconds()
}

function printMinutes() {

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
  if (btnLeft.innerText === "START") {
    chronometer.startClick(printTime)
    btnLeft.innerText = "STOP"
    btnRight.innerText = "SPLIT"
    btnRight.classList.toggle('split')
  } else {
    chronometer.stopClick()
    btnLeft.innerText = "START"
  }
  btnLeft.classList.toggle('stop')
  

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  chronometer.resetClick()
  if (btnRight.innerText === "RESET") {
    btnRight.innerText = "SPLIT"
  } else {
    btnRight.innerText = "RESET"
  }
  btnRight.classList.toggle('split')
});
