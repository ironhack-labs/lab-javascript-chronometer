var chronometer = new Chronometer(printTime);
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes, seconds) {
    printMinutes(minutes);
    printSeconds(seconds);
}

function printMinutes(minutes) {
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1]; 
}

function printSeconds(seconds) {
    secDec.innerText = seconds[0];
    secUni.innerText = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerText = 'START';
    btnLeft.setAttribute('class', 'btn start');
    btnRight.innerText = 'RESET';
    btnRight.setAttribute('class', 'btn reset');
    chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {    
    chronometer.startClick();
    btnLeft.innerText = 'STOP';
    btnLeft.setAttribute('class', 'btn stop');
    btnRight.innerText = 'SPLIT';
    btnRight.setAttribute('class', 'btn split');
}

function setResetBtn() {
    chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    (btnLeft.innerText !== 'STOP') ? setStartBtn() : setStopBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
});
