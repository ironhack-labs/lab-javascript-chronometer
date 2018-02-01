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
    btnLeft.className = "btn stop";
    btnLeft.innerText = "STOP";
}

function setSplitBtn() {

}

function setStartBtn() {
    btnLeft.className = "btn start";
    btnLeft.innerText = "START";

}

function setResetBtn() {

}

// Start/Stop Button


var started = false;
btnLeft.addEventListener('click', function () {
    if(started === false){
        chronometer.startClick();
        setStopBtn();
      } else {
        chronometer.stopClick();
        setStartBtn();
      }
    started = !started;
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
