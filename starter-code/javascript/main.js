/*jshint esversion: 6 */
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
    console.log(chronometer.currentTime);
    minDec.innerHTML = chronometer.currentTime;
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
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
}

function setSplitBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
}

function setResetBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset"); 
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains('start')) {
        setStopBtn();
        chronometer.startClick();
    }
    else if (btnLeft.classList.contains('stop')) {
        setStartBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains('reset')) {
        setSplitBtn();
    }
    else if (btnRight.classList.contains('split')) {
        setResetBtn();
    }
});
