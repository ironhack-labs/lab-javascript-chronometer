var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


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
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerHTML = "STOP";

}

function setSplitBtn() {

}

function setStartBtn() {
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerHTML = "START";
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    //if running
    if (chronometer.intervalId) {
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }
    //if stopped
    else {
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
