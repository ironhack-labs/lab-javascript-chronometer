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
}

function printMinutes() {
  minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
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
  //   window.clearInterval(idStop);
  btnLeft.textContent = "START";
  btnLeft.className = "btn start";
  btnRight.textContent = "RESET";
  btnRight.className = "btn reset";
}

function setSplitBtn() {
  chronometer.splitClick();
  printSplit();
}

function setStartBtn() {
  chronometer.startClick(printTime);
  printTime();
  btnLeft.textContent = "STOP";
  btnLeft.className = "btn stop";
  btnRight.textContent = "SPLIT";
  btnRight.className = "btn split";
}

function setResetBtn() {
  chronometer.resetClick();
  printTime(0);
  clearSplits();
  btnRight.textContent = "SPLIT";
  btnRight.className = "btn split";
}

// Start/Stop Button
btnLeft.addEventListener("click", function(e) {
  if (e.target.classList.contains("start")) {
    setStartBtn();
  } else {
    setStopBtn();
    
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
