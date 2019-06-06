var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');



function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.textContent = "STOP";
  btnLeft.classList = "btn stop";
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.classList = "btn split"
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.classList = "btn start";
}

function setResetBtn() {
  btnRight.textContent = "RESET";
  btnRight.classList = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (btnLeft.classList.contains("stop") && btnLeft.textContent === "STOP") {
    setStartBtn();
    chronometer.stopClick();
  } else if (btnLeft.classList.contains("start") && btnLeft.textContent === "START") {
    setStopBtn();
    chronometer.startClick();
  }
  console.log("click it to the left");
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains("split") && btnLeft.textContent === "SPLIT") {
    setResetBtn();
    chronometer.splitClick();
  } else if (btnRight.classList.contains("reset") && btnLeft.textContent === "RESET") {
    setSplitBtn();
    chronometer.resetClick();
  }
  console.log("click it to the right");
});

