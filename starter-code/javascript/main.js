var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {}

function printSeconds() {
  setInterval(() => {
    console.log(chronometer.twoDigitsNumber(chronometer.getSeconds()));
  }, 1000);
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.replace("start", "stop");
  } else if (btnLeft.classList.contains("stop")) {
    btnLeft.classList.replace("stop", "start");
  }
}

function setSplitBtn() {
  if (btnRight.classList.contains("reset")) {
    btnRight.classList.replace("reset", "split");
  } else if (btnRight.classList.contains("split")) {
    btnRight.classList.replace("split", "reset");
  }
}

function setStartBtn() {
  if (btnLeft.textContent === "START") {
    btnLeft.innerHTML = "STOP";
  } else if (btnLeft.textContent === "STOP") {
    btnLeft.innerHTML = "START";
  }
}

function setResetBtn() {
  if (btnRight.textContent === "RESET") {
    btnRight.innerHTML = "SPLIT";
  } else if (btnRight.textContent === "SPLIT") {
    btnRight.innerHTML = "RESET";
  }
}

// Start/Stop Button
console.log(chronometer);
// chronometer.startClick();
// setInterval(() => {
//   console.log(chronometer.getSeconds());
// }, 1000);

btnLeft.addEventListener("click", function() {
  setStopBtn();
  setStartBtn();
  setResetBtn();
  setSplitBtn();
  chronometer.startClick();
  printSeconds();
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
