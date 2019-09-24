var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById('splits');

function printTime() {
    minDec.textContent = `${printMinutes()}`;
    minUni.textContent = ``;
    secDec.textContent = `${printSeconds()}`;
    secUni.textContent = ``;
    milDec.textContent = `${printMilliseconds()}`;
    milUni.textContent = ``;
}

function printMinutes() {
    return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
    return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

function printMilliseconds() {
    return chronometer.twoDigitsNumber(chronometer.getMilliSeconds());
}

function printSplit() {
    var split = document.createElement('li');
    split.textContent = chronometer.splitClick();
    splitList.appendChild(split);
}

function clearSplits() {
    var spl = document.querySelectorAll('#splits li')
    spl.forEach( (split) => {splitList.removeChild(split)} );
}

function setStopBtn() {
    btnLeft.textContent = 'STOP';
    btnLeft.classList.replace('start', 'stop');
}

function setSplitBtn() {
    btnRight.textContent = "SPLIT";
    btnRight.classList.replace('reset', 'split');
}

function setStartBtn() {
    btnLeft.textContent = 'START';
    btnLeft.classList.replace('stop', 'start');
}

function setResetBtn() {
    btnRight.textContent = "RESET";
    btnRight.classList.replace('split', 'reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList.contains("start")){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
    }
    else{
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains("reset")){
        chronometer.resetClick();
        chronometer.intervalId = 0;
        minDec.textContent = "0";
        minUni.textContent = "0";
        secDec.textContent = "0";
        secUni.textContent = "0";
        milDec.textContent = "0";
        milUni.textContent = "0";
        clearSplits();
    }
    else{
        printSplit();
    }
});
