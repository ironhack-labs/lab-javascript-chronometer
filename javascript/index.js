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
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
minDec.innerHTML = chronometer.getMinutes();
}

function printSeconds() {
chronometer.getSeconds();
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
  btnLeft.innerHTML = "START";
  btnRight.innerHTML = "RESET";
  btnLeft.className = "btn start";  
  btnRight.className = "btn reset";
  chronometer.stopClick();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
  btnLeft.className = "btn stop";
  btnRight.className = "btn split";
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerHTML === "START") {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "RESET") {
    setStopBtn();
  } else {
    setSplitBtn();
  }
});
