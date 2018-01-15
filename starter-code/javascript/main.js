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
  var digit1 = document.getElementById("minDec");
  var digit2 = document.getElementById("minUni");
  var digit3 = document.getElementById("secDec");
  var digit4 = document.getElementById("secUni");
  digit4.innerHTML = chronometer.setTime()[4];
  digit3.innerHTML = chronometer.setTime()[3];
  digit2.innerHTML = chronometer.setTime()[1];
  digit1.innerHTML = chronometer.setTime()[0];
}
printTime();

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

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  var btnLeftStart = document.getElementById("btnLeft");
  if (btnLeftStart.className === "btn start") {
    btnLeftStart.innerHTML = "STOP";
    btnLeftStart.className = "btn stop";
    chronometer.startClick();
} else if (btnLeftStart.className === "btn stop") {
  btnLeftStart.innerHTML = "START";
  btnLeftStart.className = "btn start";
  chronometer.stopClick();
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  var btnRight = document.getElementById("btnRight");
  if (btnRight.className === "btn reset") {
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
} else if (btnRight.className === "btn split") {
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}
});
