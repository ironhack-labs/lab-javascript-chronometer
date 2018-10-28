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
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split";
    chronometer.startClick();
  } else {
    btnLeft.innerText = "START";
    btnLeft.className = "btn start";
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset";
    chronometer.stopClick(chronometer.intervalId);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnLeft.innerText === "STOP") {
    var minutes = chronometer.setMinutes();
    var seconds = chronometer.setSeconds();
    var currentMinutes = chronometer.twoDigitsNumber(minutes);
    var currentSeconds = chronometer.twoDigitsNumber(seconds);
    var split = document.createElement("li");
    split.innerText = currentMinutes + ":" + currentSeconds;
    // console.log(split);
    document.getElementById("splits").appendChild(split);
  } else {
    chronometer.resetClick();
    document.getElementById("minDec").innerText = 0;
    document.getElementById("minUni").innerText = 0;
    document.getElementById("secDec").innerText = 0;
    document.getElementById("secUni").innerText = 0;
    document.getElementById("splits").innerHTML = "";
  }
});
