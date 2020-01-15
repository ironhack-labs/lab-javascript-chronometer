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
  setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  var min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = min[0];
  minUni.textContent = min[1];
}

function printSeconds() {
  var sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = sec[0];
  secUni.textContent = sec[1];
}

function printMilliseconds() {
  var milSec = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.textContent = milSec[0];
  milUni.textContent = milSec[1];
}

function printSplit() {
  document.getElementById("splits").innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMilliseconds())}</li>`;
  
}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  printTime();
  if (btnLeft.textContent === "START") {
    chronometer.startClick();
    btnLeft.textContent = "STOP";
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnRight.textContent = "SPLIT";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
  } else {
    chronometer.stopClick();
    btnLeft.textContent = "START";
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnRight.textContent = "RESET";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
    if (btnRight.textContent === "SPLIT") {
        printSplit();
      } else {
        document.getElementById("splits").innerHTML = '';
        chronometer.resetClick();
      }
});
