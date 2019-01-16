var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var split       = document.getElementById('splits');


function printTime() {
    printMinutes();
    printSeconds();
}


function printMinutes() {
    minUni.innerText = chronometer.setMinutes() % 60;
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.setMinutes())[0];
}

function printSeconds() {
    secUni.innerText = chronometer.setSeconds() % 10;
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.setSeconds())[0];
}

function printMilliseconds() {

}

function printSplit() {
    split = document.createElement("li");
    split.appendChild(li);
    li.innerHTML = (minUni.innerHTML + minDec.innerHTML + ":" + secUni.innerHTML + secDec.innerHTML);
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
