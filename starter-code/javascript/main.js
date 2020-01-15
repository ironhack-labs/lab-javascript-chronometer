import Chronometer from "./chronometer.js"

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
    random = setInterval(()=>{
        printMinutes();
        printSeconds();
    }, 100);
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerHTML = "START";
}

function setResetBtn() {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList == "btn start"){
        setStopBtn();
        chronometer.startClick();
        printTime();
    } else if(btnLeft.classList == "btn stop"){
        setStartBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList == "btn reset"){
        setSplitBtn();
    } else if(btnRight.classList == "btn split"){
        setResetBtn();
        chronometer.resetClick();
    }
});

// GLOBAL
window.addEventListener("DOMContentLoaded", function() {
    printMilliseconds();
    printSplit();
    clearSplits();
});