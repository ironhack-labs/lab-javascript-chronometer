const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  let minutes = printMinutes();
  let seconds = printSeconds();
  let milliSeconds = printMilliseconds();
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
  milDec.innerText = milliSeconds[0];
  milUni.innerText = milliSeconds[1];
}

function printMinutes() {
  let minutes = chronometer.getMinutes().toString().padStart(2, "0");
  return minutes;
}


function printSeconds() {
  let seconds = chronometer.getSeconds().toString().padStart(2, "0");
  return seconds;
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
  btnLeft.addEventListener("click", () => {
    if (clockIsRunning(btnLeft)) {
      setStopBtn();
      chronometer.startClick(printTime);
    } else {
      setStartBtn();
      chronometer.stopClick();
    }
  });

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
