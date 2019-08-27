var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

minDec.innerHTML = '00';
secDec.innerHTML = '00';

function printTime() {
    setInterval(() => {
        minDec.innerHTML = printMinutes();
        secDec.innerHTML = printSeconds();
    }, 1000)
}

function printMinutes() {
    return chronometer.twoDigitsNumber(chronometer.getMinutes());
    
}

function printSeconds() {
    return chronometer.twoDigitsNumber(chronometer.getSeconds());
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

let isStart = true;

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    isStart = !isStart;

    if (!isStart) {
        btnLeft.innerHTML = 'STOP';
        btnLeft.className = 'btn stop';

        btnRight.innerHTML = 'SPLIT';
        btnRight.className = 'btn split';
        chronometer.startClick();
        
    } else {
        btnLeft.innerHTML = 'START';
        btnLeft.className = 'btn start';

        btnRight.innerHTML = 'RESET';
        btnRight.className = 'btn reset';
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (isStart) {
        chronometer.resetClick();
    } else {
        chronometer.splitClick();
    }
});