var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  var minDec = document.getElementById("minDec");
  var minUni = document.getElementById("minUni");
  var minutesString = minutes.toString();
  minDec.innerText = minutesString[0];
  minUni.innerText = minutesString[1];
}

function printSeconds(seconds) {
  var secDec = document.getElementById("secDec");
  var secUni = document.getElementById("secUni");
  var secondsString = seconds.toString();
  secDec.innerText = secondsString[0];
  secUni.innerText = secondsString[1];
}

function printMilliseconds() {}

function printSplit() {
  var splitsList = document.getElementById("splits");
  var node = document.createElement("li");
  node.innerText =
    chronometer.twoDigitsNumber(chronometer.minutes) +
    ":" +
    chronometer.twoDigitsNumber(chronometer.seconds);
  splitsList.appendChild(node);
}

function clearSplits() {
  var splitsList = document.getElementById("splits");
  var splitsNodes = document.querySelectorAll("#splits li");
  splitsNodes.forEach(function(split) {
    splitsList.removeChild(split);
  });
}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerText = "STOP";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerText = "SPLIT";
    chronometer.startClick();
  } else {
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");
    btnLeft.innerText = "START";
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
    btnRight.innerText = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("split")) {
    printSplit();
  } else {
    chronometer.resetClick();
    printMinutes("00");
    printSeconds("00");
    clearSplits();
  }
});
