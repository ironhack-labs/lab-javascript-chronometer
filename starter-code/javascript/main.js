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
  setInterval(function() {
    printSeconds();
    printMinutes();
  }, 1);
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {}

function printSplit() {
  let newLi = document.createElement("li");
  newLi.innerHTML = chronometer.splitClick();
  splits.append(newLi);
}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {
  chronometer.startClick();
  printTime();
}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML === "START") {
    setStartBtn();
    btnLeft.innerHTML = "STOP";
    let btnStart = document.getElementsByClassName("btn start");
    btnLeft.setAttribute("class", "btn stop");
    btnRight.innerHTML = "SPLIT";
    let btnReset = document.getElementsByClassName("btn reset");
    btnRight.setAttribute("class", "btn split");
  } else if (btnLeft.innerHTML === "STOP") {
    btnLeft.innerHTML = "START";
    let btnStop = document.getElementsByClassName("btn stop");
    btnLeft.setAttribute("class", "btn start");
    btnRight.innerHTML = "RESET";
    let btnSplit = document.getElementsByClassName("btn split");
    btnRight.setAttribute("class", "btn reset");
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  printSplit();
});
