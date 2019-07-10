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
 printMinutes()
 printMinutes1()
 printSeconds()
 printSeconds1()
}

function printMinutes() {
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}
function printMinutes1() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
}
function printSeconds() {
    console.log(chronometer.twoDigitsNumber(chronometer.getSeconds())[0])
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}
function printSeconds1() {
    console.log(chronometer.twoDigitsNumber(chronometer.getSeconds())[0])
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
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

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
