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
  console.log(chronometer.getMinutes(), chronometer.getSeconds());
}

function printMinutes() {
  minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printDec(number) {
  return chronometer.twoDigitsNumber(number)[0];
}

function printUnit(number) {
  return chronometer.twoDigitsNumber(number)[1];
}

function printMilliseconds() {}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())[0]}${chronometer.twoDigitsNumber(chronometer.getMinutes())[1]}:${
    chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  }${chronometer.twoDigitsNumber(chronometer.getSeconds())[1]}
  </li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  chronometer.stopClick();
  btnLeft.textContent = "START";
  btnLeft.className = "btn start";
  btnRight.textContent = "RESET";
  btnRight.className = "btn reset";
}

function setSplitBtn() {
  chronometer.splitClick();
  printSplit();
  //   btnRight.textContent = "RESET";
  //   btnRight.className = "btn reset";
}

function setStartBtn() {
  chronometer.startClick(printTime);
  btnLeft.textContent = "STOP";
  btnLeft.className = "btn stop";
}

function setResetBtn() {
  chronometer.resetClick();
  printTime();
  clearSplits();
  btnRight.textContent = "SPLIT";
  btnRight.className = "btn split";
}

// Start/Stop Button
btnLeft.addEventListener("click", function(e) {
  if (e.target.classList.contains("start")) {
    setStartBtn();
    setResetBtn();
  } else {
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function(e) {
  if (e.target.classList.contains("reset")) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
