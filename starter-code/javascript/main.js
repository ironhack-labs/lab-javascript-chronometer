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
// this is the SAME as using .onclick !
btnLeft.addEventListener('click', function () {
    // NOTE btnLeft is defined at the top of the file already
    if (btnLeft.innerText === 'STOP') { 
        btnLeft.innerText = 'START' 
        btnLeft.className = 'btn start'
    } else {
        btnLeft.innerText = 'STOP' 
        btnLeft.className = 'btn stop'
    }    
});

// Reset/Split Button
// this is the SAME as using .onclick !
btnRight.addEventListener('click', function () {
    btnLeft.innerText = 'START'
    btnLeft.className = 'btn start'
});