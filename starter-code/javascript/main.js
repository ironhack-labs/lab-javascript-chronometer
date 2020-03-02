var chronometer = new Chronometer(

);
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {
    minDec = Chronometer.getMinutes();
}

function printSeconds() {
    secDec = Chronometer.getSeconds();

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
btnLeft.addEventListener('click', function(event) {
    if (btnLeft.innerHTML === "START") {
        btnLeft.classList.remove("start");
        btnLeft.classList.add("stop");
        btnLeft.innerHTML = "STOP";
    } else if (btnLeft.innerHTML === "STOP") {
        btnLeft.classList.remove("stop");
        btnLeft.classList.add("start");
        btnLeft.innerHTML = "START";
    };
});
// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.innerHTML === "RESET") {
        btnRight.innerHTML = "SPLIT";
    } else if (btnRight.innerHTML === "SPLIT") {
        btnRight.innerHTML = "RESET";
    };
});