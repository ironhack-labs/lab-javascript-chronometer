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
    this.classList.toggle("stop");
    if(btnLeft.innerHTML === "START"){
        btnLeft.innerHTML = "STOP";
        chronometer.startClick();
    } else {
        btnLeft.innerHTML = "START";
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    this.classList.toggle("split");
    if(btnRight.innerHTML === "RESET"){
        btnRight.innerHTML = "SPLIT";
        chronometer.startClick();
    } else {
        btnRight.innerHTML = "RESET";
        chronometer.stopClick();
    }
});
