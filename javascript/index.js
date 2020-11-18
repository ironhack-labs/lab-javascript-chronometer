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
  minDec.textContent = printMinutes()[0];
  minUni.textContent = printMinutes()[1];
  secDec.textContent = printSeconds()[0];
  secUni.textContent = printSeconds()[1];
  }

  function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
  }

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds())
  }


// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  }


function printSplit() {
  return `${printMinutes()}:${printSeconds()}`
  }

function clearSplits(evt) {
  splits.innerHTML = '';
  // splits.removeChild(li);
  }

function setStopBtn() {
  btnLeft.className = "btn stop"
  btnLeft.textContent = "STOP"
  }

function setSplitBtn() {
  btnRight.className = "btn split"
  btnRight.textContent = "SPLIT"
  }

function setStartBtn() {
  btnLeft.className = "btn start"
  btnLeft.textContent = "START"
  }

function setResetBtn() {
  btnRight.className = "btn reset"
  btnRight.textContent = "RESET"
  }

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('stop')) {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  } else {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.classList.contains('split')) {
    let timeAtSplit = printSplit();
    const li = document.createElement('li');
    li.textContent = timeAtSplit;
    splits.appendChild(li);
    } else {
      chronometer.resetClick();
      printTime();
      clearSplits(); 
    }
  }
);