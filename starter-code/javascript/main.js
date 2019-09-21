var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var addSplitTime = document.getElementById("splits");

function printTime() {
  setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printMilliseconds() {
  milDec.innerHTML = "";
  milUni.innerHTML = chronometer.getMilisecondes();
}

function printSplit() {
  addSplitTime.innerHTML += `<ol>${chronometer.twoDigitsNumber(
    chronometer.getMinutes()
  )}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}.${chronometer.getMilisecondes()}</ol>`;
}

function clearSplits() {
  addSplitTime.innerHTML = "";
}

function setStopBtn() {
  chronometer.stopClick();
  btnLeft.innerHTML = "START";
}

function setSplitBtn() {
  chronometer.splitClick();
  printSplit();
}

function setStartBtn() {
  chronometer.startClick();
  btnLeft.innerHTML = "STOP";
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    setStartBtn();
    printTime();
  } else {
    setStopBtn();
  }
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");

  if (btnRight.classList.contains("reset")) {
    btnRight.innerHTML = "RESET";
  } else {
    btnRight.innerHTML = "SPLIT";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("reset")) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
