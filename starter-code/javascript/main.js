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
  chronometer.setTime();
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.minutes[0];
  minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.seconds[0];
  secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {
  milDec.innerHTML = chronometer.milliseconds[0];
  milUni.innerHTML = chronometer.milliseconds[1];
}

function printSplit() {
  var newLi = document.createElement("li");
  splitList.append(newLi);
  newLi.innerHTML = chronometer.splitClick();
}

function clearSplits() {
  splitList.innerHTML = null;
}

function setStopBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (this.classList.contains("start")) {
    setStartBtn();
    setSplitBtn();
    chronometer.startClick();
  } else {
    setStopBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (this.classList.contains("split")) {
    printSplit();
  } else {
    setResetBtn();
    clearSplits();
  }
});
