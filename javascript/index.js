const chronometer = new Chronometer();

 // enumerators

 const BTN_TEXT_START = "START";
 const BTN_TEXT_RESET = "RESET";

 // get the buttons:
 const btnLeft = document.getElementById("btnLeft");
 const btnRight = document.getElementById("btnRight");
// get the DOM elements that will serve us to display the time:
// let hourDec = document.getElementById("hourDec");
// let hourUni = document.getElementById("hourUni");
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
 let splits = document.getElementById("splits");

 function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  printMilliseconds();
 }

 function printHours() {
  let hours = chronometer.twoDigitsNumber(chronometer.getHours());
  hourDec.innerText = hours[0];
  hourUni.innerText = hours[1];
 }

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];

}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
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
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
