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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minToPrint = chronometer
    .getMinutes()
    .toString()
    .split("");
  minUni.textContent = minToPrint[1];
  minDec.textContent = minToPrint[0];
}

function printSeconds() {
  let secToPrint = chronometer
    .getSeconds()
    .toString()
    .split("");
  secUni.textContent = secToPrint[1];
  secDec.textContent = secToPrint[0];
}

function printMilliseconds() {}

function printSplit() {
  let splitTime = chronometer.splitClick();
  splits.innerHTML += `<li>${splitTime}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.textContent = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (chronometer.isRunning) {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  } else {
    chronometer.startClick(printTime);
    setSplitBtn();
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (chronometer.isRunning) {
    printSplit();
  } else {
    chronometer.resetClick();
    printTime();
    clearSplits();
  }
});
