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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

function printMilliseconds() {}

function printSplit() {
  splits.innerHTML += `<li>${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}</li>`;
}

function clearSplits() {}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.style.backgroundColor = "red";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.style.backgroundColor = "blue";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.style.backgroundColor = "green";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.style.backgroundColor = "grey";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML == "STOP") {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  } else {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML == "SPLIT") {
    printSplit();
  } else {
    chronometer.resetClick();
    splits.innerHTML = "";
  }
});
