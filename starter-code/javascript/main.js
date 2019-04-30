var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {
  generalMin = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = generalMin[0];
  minUni.innerHTML = generalMin[1];
}

function printSeconds() {
  let generalSec;
  generalSec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = generalSec[0];
  secDec.innerHTML = generalSec[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className == "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
  } else if (btnLeft.className == "btn stop") {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className == "btn reset") {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
