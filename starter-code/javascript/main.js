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
  let minunts = printMinutes();
  minDec.innerHTML = minunts.charAt;
  let minunts2 = printMinutes();
  minUni.innerHTML = minunts2.charAt;
  let secnunts = printSeconds();
  secDec.innerHTML = secnunts.charAt;
  let secnunts2 = printSeconds();
  secUni.innerHTML = secnunts2.charAt;
}
function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
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
  if (btnLeft.innerText == "START") {
    btnLeft.classList.replace("Start", "Stop");
    btnLeft.textContent = "STOP";
    setStartBtn();
  } else {
    btnLeft.classList.replace("Stop", "Start");
    btnLeft.textContent = "START";
    setStopBtn();
  }

  //start chron
  //change style of button
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
