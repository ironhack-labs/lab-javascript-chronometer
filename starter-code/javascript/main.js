var chronometer = new Chronometer(); // instance (une version) de la class Chronometer
console.log(chronometer);

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

function printSeconds() {
  setInterval(() => {
    var currSecs = chronometer.getSeconds();
    currSecs = chronometer.twoDigitsNumber(currSecs);
    console.log(currSecs);
    secDec.textContent = currSecs;
  }, 1000);
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.onclick = function() {
  console.log("clicked", btnLeft);
  if (btnLeft.classList.contains("start")) {
    // je veux start le chrono
    chronometer.startClick();
    printSeconds();
  } else {
    // je veux stop le chrono
  }
};

// Reset/Split Button
btnRight.addEventListener("click", function() {});
