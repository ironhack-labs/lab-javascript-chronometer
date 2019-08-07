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
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  minDec.innerText = minutes.slice(0, 1);
  minUni.innerText = minutes.slice(1, 2);
  secDec.innerText = seconds.slice(0, 1);
  secUni.innerText = seconds.slice(1, 2);
}

function printMinutes() {
  let mins = chronometer.getMinutes();
}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {
  let newTime = document.createElement("li");
  newTime.innerText = getCTime();
  splits.appendChild(newTime);
  //splits.innerHTML += `<li>${getCTime()}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

function getCTime() {
  let c = chronometer;
  let tdn = chronometer.twoDigitsNumber;
  return `${tdn(c.getMinutes())}:${tdn(c.getSeconds())}:00`;
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
  let context = btnRight.textContent;
  if (context === "RESET") {
    chronometer.resetClick();
    clearSplits();
  } else {
    printSplit();
  }
});
