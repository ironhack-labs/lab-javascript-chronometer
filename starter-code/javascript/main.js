var chronometer = new Chronometer(0);
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  var printMin = chronometer.twoDigitsNumber(chronometer.setMinutes());

  minUni.innerHTML = printMin[1];
  minDec.innerHTML = printMin[0];
}

function printSeconds() {
  var printSec = chronometer.twoDigitsNumber(chronometer.setSeconds());

  secDec.innerHTML = printSec[0];
  secUni.innerHTML = printSec[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {}

function setStartBtn() {
  // lancer le chrono sur l'instance
  chronometer.startClick();
  setInterval(printTime, 1000);
}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  console.log(chronometer.currentTime);
  if (chronometer.currentTime === 0) {
    setStartBtn();
  } else if (chronometer.currentTime !== 0) {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
