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
  let twoDigitsMinute = chronometer.twoDigitsNumber(minutes);
  minDec.innerHTML = twoDigitsMinute[0];
  minUni.innerHTML = twoDigitsMinute[1];
}

function printSeconds() {
  let secondes = chronometer.getSeconds();
  let twoDigitsSeconde = chronometer.twoDigitsNumber(secondes);
  secDec.innerHTML = twoDigitsSeconde[0];
  secUni.innerHTML = twoDigitsSeconde[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

/*When the left button is clicked while the chronometer is stopped we need to:
Set the btnLeft button with the text STOP, and the class btn stop.
Set the btnRight button with the text SPLIT, and the class btn split.*/

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  if (btnLeft.classList.contains("start")) {
    btnLeft.innerHTML = "START";
    chronometer.startClick();
  } else if (btnLeft.classList.contains("stop")) {
    btnLeft.innerHTML = "STOP";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  if (btnRight.classList.contains("reset")) {
    btnRight.innerHTML = "RESET";
  } else if (btnRight.classList.contains("split")) {
    btnRight.innerHTML = "SPLIT";
  }
});
