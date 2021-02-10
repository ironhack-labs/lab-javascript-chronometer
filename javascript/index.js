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

function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds(milliseconds) {
  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];
}

function printSplit() {
  let splitTime = chronometer.splitClick();
  splits.innerHTML += `<li>${splitTime}:${chronometer.centiTwoDigits}</li>`;
  
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.value === 'btn start') {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  }
  if (btnLeft.classList.value === 'btn stop') {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.value === 'btn reset') {
    chronometer.resetClick();
    clearSplits();
  }
  if (btnRight.classList.value === 'btn split') {
    printSplit();
  }
});

