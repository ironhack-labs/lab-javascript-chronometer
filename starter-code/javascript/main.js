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
    minDec.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())[0]}`;
    minUni.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())[1]}`;
}

function printSeconds() {
    secDec.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getSeconds())[0]}`;
    secUni.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getSeconds())[1]}`;
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
    if(btnLeft.className==="btn start"){
        btnLeft.className="btn stop"
        btnLeft.innerHTML = "STOP"
        chronometer.startClick();
        printTime();
    }
    else{
        btnLeft.className="btn start"
        btnLeft.innerHTML = "START"
        chronometer.stopClick();
    }
}


function setResetBtn() {
    if(btnRight.className==="btn reset"){
        btnRight.className="btn split"
        btnRight.innerHTML = "SPLIT"
    }
    else{
        btnRight.className="btn reset"
        btnRight.innerHTML = "RESET"
    }
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
     setStartBtn();
    });

// Reset/Split Button
btnRight.addEventListener('click', function () {
    setResetBtn() 
    });

