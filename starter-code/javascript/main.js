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
  return chronometer.splitClick();
}

function printMinutes() {

}

function printSeconds() {
 
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === "START") {
    setStartBtn()
    chronometer.startClick()
  } else {
    setStopBtn()
    chronometer.stopClick()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML == "RESET") {
    chronometer.resetClick();
    clearSplits();
  } else {
    printSplit();
  }
});
