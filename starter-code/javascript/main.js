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
    if(btnLeft.textContent === 'START'){
         btnLeft.classList.replace('start', 'stop')
         btnLeft.textContent = 'STOP'
         btnRight.classList.replace('reset', 'split')
         btnRight.textContent = 'SPLIT'
    } else {
         btnLeft.classList.replace('stop', 'start')
         btnLeft.textContent = 'START'
         btnRight.classList.replace('split', 'reset')
         btnRight.textContent = 'RESET'
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    /*if(btnRight.textContent === 'RESET'){
        btnRight.classList.replace('reset', 'split')
        btnRight.textContent = 'SPLIT'
    } else {
        btnRight.classList.replace('split', 'reset')
        btnRight.textContent = 'RESET'
    }  */
});
