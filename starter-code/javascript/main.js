var chronometer = new Chronometer();


var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var btnStart    = document.getElementsByClassName('start')[0];
var btnReset    = document.getElementsByClassName('reset')[0];
var btnStop     = document.getElementsByClassName('stop')[0];
var btnSplit    = document.getElementsByClassName('split')[0];

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
    if ( chronometer.currentTime === 0 ){
        //chronometer.startClick()
        btnLeft.setAttribute('class', 'btn stop')
        btnLeft.innerHTML ='STOP'
        btnRight.setAttribute('class', 'btn split')
        btnRight.innerHTML = 'SPLIT'
    } else {
        chronometer.startClick()
        btnLeft.setAttribute('class', 'btn start')
        btnLeft.innerHTML = 'START'
        btnRight.setAttribute('class', 'btn reset')
        btnRight.innerHTML = 'RESET'
    }
});
btnStart.onclick = chronometer.startClick
btnReset.onclick = chronometer.resetClick
// Reset/Split Button
btnRight.addEventListener('click', function () {
    chronometer.resetClick()
});
