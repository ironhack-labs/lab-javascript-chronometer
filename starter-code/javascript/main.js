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
    if (Chronometer.setMinutes() > 10) {
        minDec.innerText = Chronometer.setMinutes().slice(0,1);
        minUni.innerText = Chronometer.setMinutes().slice(1,2);
    } else {
        minUni.innerText = Chronometer.setMinutes();
    }
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

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
