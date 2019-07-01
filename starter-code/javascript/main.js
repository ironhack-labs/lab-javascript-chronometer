var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var parentList = document.getElementById("splits");

function printTime() {}

function printMinutes() {
  var secUnit = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUnit = secUnit.split("");
  secUni.innerText = secUnit[1];
  secDec.innerText = secUnit[0];
}

function printSeconds() {
  var minUnit = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUnit = minUnit.split("");
  minUni.innerText = minUnit[1];
  minDec.innerText = minUnit[0];
}

function printMilliseconds() {
  var milUnit = chronometer.twoDigitsNumber(chronometer.getMiliSeconds());
  milUnit = milUnit.split("");
  milUni.innerText = milUnit[1];
  milDec.innerText = milUnit[0];
}

function printSplit() {
  const newItem = document.createElement("li");
  newItem.innerText = chronometer.splitClick();
  parentList.appendChild(newItem);
}

function clearSplits() {
  return (parentList.innerHTML = "");
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerText === "START") {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerText === "RESET") {
    secUni.innerText = chronometer.resetClick();
    secDec.innerText = chronometer.resetClick();
    minUni.innerText = chronometer.resetClick();
    minDec.innerText = chronometer.resetClick();
    milUni.innerText = chronometer.resetClick();
    milDec.innerText = chronometer.resetClick();
    clearSplits();
  } else printSplit();
});
