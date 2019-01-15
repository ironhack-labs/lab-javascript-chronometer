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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.textContent = chronometer.minutes[0];
  minUni.textContent = chronometer.minutes[1];
}

function printSeconds() {
  secDec.textContent = chronometer.seconds[0];
  secUni.textContent = chronometer.seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function (event) {
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  btnLeft.classList.toggle("start");

  if(btnLeft.textContent === "START") {
    btnLeft.textContent = "STOP";
    btnRight.textContent = "SPLIT";

    chronometer.startClick();

  } else {
    btnLeft.textContent = "START";
    btnRight.textContent = "RESET";

    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.textContent === "RESET") {
    minDec.textContent = 0;
    minUni.textContent = 0;
    secDec.textContent = 0;
    secUni.textContent = 0;
    chronometer.resetClick();
  }
});
