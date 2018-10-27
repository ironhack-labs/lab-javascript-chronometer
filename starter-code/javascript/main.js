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
  var leftButton = document.getElementById("btnLeft");

  if (leftButton.innerText === "START") {
    leftButton.innerText = "STOP";
    leftButton.className = "btn stop";
  } else {
    leftButton.innerText = "START";
    leftButton.className = "btn start";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  var leftButton = document.getElementById("btnLeft");
  var rightButton = document.getElementById("btnRight");

  if (leftButton.innerText === "START") {
    rightButton.innerText = "SPLIT";
    rightButton.className = "btn split";
  } else {
    rightButton.innerText = "RESET";
    rightButton.className = "btn reset";
  }
});
