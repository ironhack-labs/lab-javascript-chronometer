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
    //chronometer.setSeconds().split("")

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
    if (btnLeft.className === "btn start") {
        btnLeft.innerText = "STOP";
        btnLeft.className = "btn stop";
        chronometer.startClick();
    } else if (btnLeft.className === "btn stop") {
        btnLeft.innerText = "START";
        btnLeft.className = "btn start";
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className === "btn reset") {
        btnRight.innerText = "SPLIT";
        btnRight.className = "btn split";
    } else if (btnRight.className === "btn split") {
        btnRight.innerText = "RESET";
        btnRight.className = "btn reset";
    }
});