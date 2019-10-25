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
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
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
  let inch = chronometer.getMinutes();
  let alla = chronometer.getSeconds();
  return (olElement.innerHTML += `<li>${chronometer.twoDigitsNumber(
    inch
  )} : ${chronometer.twoDigitsNumber(alla)}</li>`);
}

function clearSplits() {
  chronometer.resetClick();
  olElement.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.toggle("stop");
}

function setSplitBtn() {
  btnRight.classList.toggle("split");
}
function setStartBtn() {
  btnLeft.classList.toggle("start");
}

function setResetBtn() {
  btnRight.classList.toggle("reset");
}
// Start/Stop Button
btnLeft.addEventListener("click", function() {
  setStartBtn();
  setStopBtn();
  if (btnLeft.classList.contains("start")) {
    setResetBtn();
    setSplitBtn();
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
  } else {
    setSplitBtn();
    setResetBtn();
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
    printTime();
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
