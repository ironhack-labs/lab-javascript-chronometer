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
let internalPrintId;

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let min = chronometer.getMinutes();
  let formatMin = chronometer.twoDigitsNumber(min);
  minDec.innerText = formatMin[0];
  minUni.innerText = formatMin[1];
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  let formatSec = chronometer.twoDigitsNumber(sec);
  //console.log('formatSec ==>> ', formatSec);
  secDec.innerText = formatSec[0];
  secUni.innerText = formatSec[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {
  let liClear = document.querySelectorAll("li");
  for (i = 0; i < liClear.length; i++) {
    liClear[i].remove();
  }
}

function setStopBtn() {
  chronometer.stopClick();
  clearInterval(internalPrintId);
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

function setSplitBtn() {
  let capture = chronometer.splitClick(
    chronometer.twoDigitsNumber(chronometer.getMinutes()),
    chronometer.twoDigitsNumber(chronometer.getSeconds())
  );
  let liTag = document.createElement("li");
  splits.appendChild(liTag);
  liTag.innerHTML = capture;
}

function setStartBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
  chronometer.startClick();
  intervalPrintId = setInterval(function() {
    printTime();
  }, 1000);
}

function setResetBtn() {
  chronometer.stopClick();
  clearInterval(internalPrintId);
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className === "btn start") {
    setStartBtn();
  } else setStopBtn();
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className === "btn split") {
    setSplitBtn();
  } else setResetBtn();
});