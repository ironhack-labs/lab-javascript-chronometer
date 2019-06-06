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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let minutesPicked = chronometer.twoDigitsNumber();
  let minutesDeci = minutesPicked[0];
  let minutesUni = minutesPicked[1];
  minDec.textContent = minutesDeci;
  minUni.textContent = minutesUni;
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondsPicked = chronometer.twoDigitsNumber();
  let secondsDeci = secondsPicked[0];
  let secondsUni = secondsPicked[1];
  secDec.textContent = secondsDeci;
  secUni.textContent = secondsUni;
}

function printMilliseconds() {
  //quelles millisecondes ?
}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function(event) {
  btnLeft.onclick = function() {
    let target = event.target;
    if (target.classList.contains("start")) {
      target.textContent = "STOP";
      target.classList.replace("start", "stop");
      console.log(target);
    }
  };
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
//window.addEventListener("DOMContentLoaded");
