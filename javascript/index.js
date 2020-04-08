const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
console.log(btnLeft);
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
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  const minDec = document.getElementById('minDec');
  const minUni = document.getElementById('minUni');
  minDec.innerHTML = minutes.slice(1);
  minUni.innerHTML = minutes.slice(-1);
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  const secDec = document.getElementById('secDec');
  const secUni = document.getElementById('secUni');
  secDec.innerHTML = seconds.slice(1);
  secUni.innerHTML = seconds.slice(-1);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  console.log("in clear splits");
}

function setStopBtn() {
  console.log("in stop btn");
  btnLeft.innerHTML = "STOP";
  setSplitBtn();
}

function setSplitBtn() {
  console.log("in split btn");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  console.log("in start btn");
  btnLeft.innerHTML = "START";
  setResetBtn();
}

function setResetBtn() {
  console.log("in reset btn");
  btnRight.innerHTML = "RESET";
}

let intervalId = 0;
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick;
    intervalId = setInterval(() => {
      printTime();
      console.log(chronometer.currentTime); // searching why it stays at 0
    }, 1000);
    setStopBtn();
  }
  else if (btnLeft.classList.contains("stop")) {
    clearInterval(intervalId);
    chronometer.stopClick();
    setStartBtn();
  }
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
});

btnRight.addEventListener('click', () => {
  //if (btnRight.classList.contains("reset")) clearSplits();
  //if (btnRight.classList.contains("split")) setSplitBtn();
});
