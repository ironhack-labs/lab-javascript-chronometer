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
  chronometer.twoDigitsNumber
  printMinutes();
  printSeconds();
}
}

function printMinutes() {
  chronometer.getMinutes()
}

function printSeconds() {
  chronometer.getSeconds()
}

// ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
//}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // write "STOP" + stop the chronometer
  chronometer.stopClick()
  btnLeft.value="STOP";
}

function setSplitBtn() {
  // ... your code goes here
  chronometer.splitClick()
}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("split");
  if (chronometer.currentTime===0){
  setStartBtn();
  printTime();
}
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (chronometer.currentTime!==0) {
    setStopBtn()
  }
});
