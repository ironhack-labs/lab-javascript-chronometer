var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(min, sec) {
  printMinutes(min);
  printSeconds(sec);
}

function printMinutes(min) {
  minDec.innerHTML = min.split("")[0];
  minUni.innerHTML = min.split("")[1];
}

function printSeconds(sec) {
  secDec.innerHTML = sec.split("")[0];
  secUni.innerHTML = sec.split("")[1];
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

  if (btnLeft.innerHTML == "START") {
  btnLeft.setAttribute("class", "btn stop")
  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute("class", "btn split");
  chronometer.startClick();

} else {
  btnLeft.setAttribute("class", "btn start")
  btnLeft.innerHTML = "START";
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute("class", "btn btn reset");
  chronometer.stopClick();
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
if (btnRight.innerHTML == "RESET") {
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
}
});
