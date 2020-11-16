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
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliSeconds = chronometer.twoDigitsNumber(chronometer.getMilliSeconds());
  milDec.innerText = milliSeconds[0];
  milUni.innerText = milliSeconds[1];
}

function printSplit() {
  const splitOl = document.getElementById('splits');
  const newSplit = document.createElement('li');
  newSplit.innerText = chronometer.splitClick();
  splitOl.appendChild(newSplit);
}

function clearSplits() {
  const splits = document.querySelectorAll('li');
  splits.forEach(split => split.remove());
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.className === "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
    
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className === "btn split") {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  }
});
