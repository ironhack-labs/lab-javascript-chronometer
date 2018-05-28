var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime(mins, secs) {

    printMinutes(mins);
    printSeconds(secs);

}

function printMinutes(mins) {

    minDec.innerHTML = mins.charAt(0);
    minUni.innerHTML = mins.charAt(1);
}

function printSeconds(secs) {

    secDec.innerHTML = secs.charAt(0);
    secUni.innerHTML = secs.charAt(1);
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
