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
  minUni.innerHTML = chronometer.minutes.charAt(1);
  minDec.innerHTML = chronometer.minutes.charAt(0);
}

function printSeconds() {
  secUni.innerHTML = chronometer.seconds.charAt(1);
  secDec.innerHTML = chronometer.seconds.charAt(0);
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.classList.remove();
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
  chronometer.startClick();
}

function setSplitBtn() {
  btnRight.classList.remove();
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.classList.remove();
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.classList.remove();
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML == "START") {
    setStopBtn();
    return;
  }
  setStartBtn();
  return;
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML == "RESET") {
    setSplitBtn();
    return;
  }
  setResetBtn();
  return;
});
