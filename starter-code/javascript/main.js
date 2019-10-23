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
  const intervalId = setInterval(() => {
    printSeconds();
    console.log("lalala");
  }, 1000);
  return intervalId;
}

function printMinutes() {}

function printSeconds() {
  var seconds = chronometer.getSeconds();
  var sec = chronometer.twoDigitsNumber(seconds);
  secDec.textContent = `${sec[0]}`;
  secUni.textContent = `${sec[1]}`;
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.textContent === "START") {
    btnLeft.textContent = "STOP";
    btnRight.textContent = "SPLIT";
    btnLeft.className = "btn stop";
    btnRight.className = "btn split";
    chronometer.startClick();
    printTime();
  } else {
    btnLeft.textContent = "START";
    btnRight.textContent = "RESET";
    btnLeft.className = "btn start";
    btnRight.className = "btn reset";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
