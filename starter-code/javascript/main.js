var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

console.log("------print Time----->");

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {}

function printSplit() {
  olElement = document.getElementById("splits");
  var min = chronometer.getMinutes();
  var sec = chronometer.getSeconds();
  olElement.innerHTML += `<li>${chronometer.twoDigitsNumber(min)}:${chronometer.twoDigitsNumber(sec)}</li>`;
}

function clearSplits() {
  chronometer.resetClick();
  olElement.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
  btnLeft.textContent = "START";
  chronometer.stopClick();
  btnRight.textContent = "RESET";
}

function setSplitBtn() {
  chronometer.splitClick();
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.textContent = "RESET";
  //chronometer.splitClick();
}

function setStartBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.textContent = "STOP";
  chronometer.startClick();
  btnRight.textContent = "SPLIT";
}

function setResetBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.textContent = "SPLIT";
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className.includes("start")) {
    setStartBtn();
    setResetBtn();
  } else {
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className.includes("reset")) {
    clearSplits();
  } else {
    printSplit();
  }
});

setInterval(function() {
  printTime();
}, 0);
