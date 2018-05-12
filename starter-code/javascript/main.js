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
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML=chronometer.twoDigitsNumber(chronometer.setMinutes)[0];
    minUni.innerHTML=chronometer.twoDigitsNumber(chronometer.setMinutes)[1];
}

function printSeconds() {
    secDec.innerHTML=chronometer.twoDigitsNumber(chronometer.setSeconds)[0];
    secUni.innerHTML=chronometer.twoDigitsNumber(chronometer.setSeconds)[1];
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
    chronometer.startClick();
    chronometer.printTime();
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if(btnLeft.innerHTML=="START"){
        btnLeft.innerHTML="STOP";
        btnLeft.setAttribute('class','btn stop');
        chronometer.setStartBtn();
    }else{
        btnLeft.innerHTML="START";
        btnLeft.setAttribute('class','btn start');
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML=="RESET"){
        btnRight.innerHTML="SPLIT";
        btnRight.setAttribute('class','btn split');
        
    }else{
        btnRight.innerHTML="RESET";
        btnRight.setAttribute('class','btn reset');
    }
});
