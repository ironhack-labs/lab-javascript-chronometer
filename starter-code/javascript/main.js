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

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className == "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick()
    console.log(chronometer)
  } else {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className = "btn reset"){
    btn
  }
});
