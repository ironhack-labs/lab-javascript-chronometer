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
  console.log("printTime called");
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  console.log("printMinutes called: " + chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];

}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  console.log("printSeconds called: " + chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliSec = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  console.log("printMilliseconds called: " + chronometer.getMilliseconds());
  milDec.innerHTML = milliSec[0];
  milUni.innerHTML = milliSec[1];
}

function printSplit() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let millisec = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  chronometer.splitClick(minutes, seconds);
  let eleLi = document.createElement('li');
  eleLi.innerHTML = minutes + ":" + seconds + ":" + millisec;
  splits.appendChild(eleLi);
}

function clearSplits() {
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  milUni.innerHTML = 0;
  milDec.innerHTML = 0;
  while (splits.hasChildNodes()) {
    splits.removeChild(splits.firstChild);
  }
  // splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    // btnLeft.className = 'btn stop';
    // btnLeft.innerHTML = "STOP";
    // btnRight.className = "btn split";
    // btnRight.innerHTML = "SPLIT";
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    // btnLeft.className = 'btn start';
    // btnLeft.innerHTML = "START";
    // btnRight.className = "btn reset";
    // btnRight.innerHTML = "RESET";
    chronometer.stopClick();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === "btn split") {
    printSplit();
  } else {
    clearSplits();
  }


});