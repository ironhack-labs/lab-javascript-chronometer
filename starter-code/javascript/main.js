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
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
    secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}
    function printMilliseconds() {

    }

    function printSplit() {


    }

    function clearSplits() {

    }

    function setStopBtn() {
        chronometer.stopClick();
        btnLeft.textContent = "START";
        btnLeft.className = "btn start";
        btnRight.textContent = "RESET";
        btnRight.className = "btn reset";

    }

    function setSplitBtn() {


    }

    function setStartBtn() {
        chronometer.startClick(printTime);
        printTime();
        btnLeft.textContent = "STOP";
        btnLeft.className = "btn stop";
        btnRight.textContent = "SPLIT";
        btnRight.className = "btn split";

    }

    function setResetBtn() {


    }

    // Start/Stop Button



    // Reset/Split Button
