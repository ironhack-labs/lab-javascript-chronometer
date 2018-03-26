var chronometer = new Chronometer();


var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
// var btnStart    = document.getElementsByClassName('start')[0];
// var btnReset    = document.getElementsByClassName('reset')[0];
// var btnStop     = document.getElementsByClassName('stop')[0];
// var btnSplit    = document.getElementsByClassName('split')[0];

function printTime() {
    printMinutes() 
    printSecond()
}

function printMinutes() {
    milDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[0];
    milUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[1];
}

function printSeconds() {
    secDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[0];
    secUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[1];
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
    if ( btnLeft.classList.contains("start") ){
        chronometer.startClick(printTime)
        btnLeft.setAttribute('class', 'btn stop')
        btnLeft.innerHTML ='STOP'
        btnRight.setAttribute('class', 'btn split')
        btnRight.innerHTML = 'SPLIT'
    } else {
        chronometer.stopClick()
        btnLeft.setAttribute('class', 'btn start')
        btnLeft.innerHTML = 'START'
        btnRight.setAttribute('class', 'btn reset')
        btnRight.innerHTML = 'RESET'
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnLeft.classList.contains("reset")){
        chronometer.resetClick()
    }else {
    }
});
