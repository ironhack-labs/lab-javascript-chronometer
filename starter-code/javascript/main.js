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
  btnLeft.className('btn start');
  btnLeft.textContent('START');
}

function setSplitBtn() {
  btnRight.className('btn reset');
  btnRight.textContent('RESET');
}

function setStartBtn() {
  btnLeft.className('btn stop');
  btnLeft.textContent('STOP');
}

function setResetBtn() {
  btnRight.className('btn split');
  btnRight.textContent('SPLIT');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
