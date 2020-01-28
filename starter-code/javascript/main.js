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
    chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
    chronometer.getSeconds();
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
    if(btnLeft.innerText === 'START'){
        chronometer.startClick();
        btnLeft.innerText = 'STOP';
    } else {
        chronometer.stopClick();
        btnLeft.innerText = 'START'; 
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerText === 'RESET'){
        chronometer.resetClick();
        btnRight.innerText = 'SPLIT';
    } else {
        chronometer.splitClick();
        btnRight.innerText = 'RESET'; 
    } 
});
