var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes, seconds) {
printMinutes(minutes);
printSeconds(seconds);
}

function printMinutes(minutes) {
minutos = chronometer.twoDigitsNumber(chronometer.setMinutes());
minUni.innerHTML = minutos[1];
minDec.innerHTML = minutos[0];
}

function printSeconds() {
segundos = chronometer.twoDigitsNumber(chronometer.setSeconds());
secUni.innerHTML = segundos[1];
secDec.innerHTML = segundos[0];
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
if (btnLeft.innerHTML=="START"){
  btnLeft.innerHTML = "STOP";
  btnLeft.setAttribute("class", "btn stop");
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute("class", "btn split");
}
else {
  btnLeft.innerHTML="START";
  btnLeft.setAttribute("class", "btn start");
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute("class", "btn reset");
}

});

// Reset/Split Button
//btnRight.addEventListener('click', function () {
//}
