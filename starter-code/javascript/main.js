var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  this.intervalId = setInterval(function () {
    printSeconds();
    printMinutes();
  }, 1000);
}

function printMinutes() {
  var mins = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minDec.innerText = mins[0];
  minUni.innerText = mins[1];
}

function printSeconds() {
  var secs = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secDec.innerText = secs[0];
  secUni.innerText = secs[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerText == "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerText == "RESET") {
    setSplitBtn();
    chronometer.resetClick();
  } else {
    setResetBtn();
  }
});