var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = (document.getElementById("minDec").innerText) 
var minUni = (document.getElementById("minUni").innerText)
var secDec = (document.getElementById("secDec").innerText)
var secUni = (document.getElementById("secUni").innerText)
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var actual = 0;
chronometer.formato=chronometer.twoDigitsNumber(chronometer.setMinutes,chronometer.setSeconds)
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
btnLeft.addEventListener("click", () => {
  if (document.getElementById("btnLeft").innerText === "START") {
    document.getElementById("btnLeft").innerText = "STOP";
    document.getElementById("btnLeft").className.innerText = "btn stop";
    document.getElementById("btnRight").innerText = "SPLIT";
    document.getElementById("btnRight").className.innerText = "btn split";
    chronometer.startClick();
    actualizador();
  } else {
    document.getElementById("btnLeft").innerText = "START";
    document.getElementById("btnLeft").className.innerText = "btn start";
    document.getElementById("btnRight").innerText = "RESET";
    document.getElementById("btnRight").className.innerText = "btn reset";
    chronometer.stopClick();
    stopper();
  }
});


actualizador = function() {
  actual = setInterval(() => {
    minDec = chronometer.formato[0];
    minUni = chronometer.formato[1];
    secDec = chronometer.formato[2];
    secUni = chronometer.formato[3];
  }, 1000);
};

stopper = function() {
  clearInterval(actual)}

