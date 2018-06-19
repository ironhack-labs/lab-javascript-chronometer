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

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains("start")){
        btnLeft.classList.add('stop');
        btnLeft.classList.remove('start');
        btnLeft.innerText = "STOP";
        chronometer.startClick();
    } else {
        btnLeft.classList.add('start');
        btnLeft.classList.remove('stop');
        btnLeft.innerText = "START";
        chronometer.stopClick();
    };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains("reset")) {
        btnRight.classList.add("split");
        btnRight.classList.remove("reset");
        btnRight.innerText = "SPLIT";
    } else {
        btnRight.classList.add("reset");
        btnRight.classList.remove("split");
        btnRight.innerText = "RESET";
    };
});