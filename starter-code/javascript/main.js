var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let mins = chronometer.getMinutes();
}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {
  splits.appendChild((document.createElement("li").innerText = getTime()));
}

function clearSplits() {
  splits.children = new HTMLCollection();
}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

function getCTime() {
  let c = 0;
  let tdn = chronometer.twoDigitsNumber;
  return `${tdn(getCMinutes())}:${tdn(getCSeconds())}:00`;
}
// Start/Stop Button
btnLeft.addEventListener("click", function() {
  let context = btnLeft.textContent;
  if (context === "START") {
    btnLeft.textContent = "STOP";
    btnRight.textContent = "SPLIT";
    chronometer.startClick();
  } else {
    btnLeft.textContent = "START";
    btnRight.textContent = "RESET";
    chronometer.stopClick();
    estado = "parado";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (estado === "RESET") {
    chronometer.resetClick();
    clearSplits();
  } else {
    printSplit(chronometer.splitClick());
  }
});
