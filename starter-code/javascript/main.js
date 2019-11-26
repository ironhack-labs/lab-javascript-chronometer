var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

let chronometer = Chronometer();

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

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Buttonsplit
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === "btn-start") { // if the clock's status is STOP
    btnLeft.className = "btn-stop";
    btnLeft.innerHTML = "STOP";

    btnRight.className = "btn-split";
    btnRight.innerHTML = "SPLIT";

    chronometer.startClick();
  }
  else {
    tbnri.className = "btn-start";
    btnLeft.innerHTML = "START";

    btnRight.className = "btn-reset";
    btnRight.innerHTML = "RESET";

    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
