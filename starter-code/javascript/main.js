var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  console.log(chronometer.setTime());
  secUni.innerText = chronometer.setSeconds();
}

function printMinutes() {}

function printSeconds() {
  var self = this;
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.classList.replace("start", "stop");
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList.replace("reset", "split");
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList.replace("stop", "start");
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.classList.replace("split", "reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  // btnLeft.classList.toggle("start");
  // btnLeft.classList.toggle("stop");
  if (btnLeft.classList.contains("stop")) {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  } else if (btnLeft.classList.contains("start")) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
