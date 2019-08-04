var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let state = "Stopped";
let list = document.getElementById('splits');

function printTime(minutes, seconds, mili) {
    printMinutes(minutes);
    printSeconds(seconds);
    printMilliseconds(mili);
}

function printMinutes(minutes) {
    minUni.innerText = minutes[1];
    minDec.innerText = minutes[0];
}

function printSeconds(seconds) {
    secUni.innerText = seconds[1];
    secDec.innerText = seconds[0];
}

function printMilliseconds(mili) {
    milUni.innerText = mili[1];
    milDec.innerText = mili[0];
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
    if (state === "Stopped") {
        btnLeft.setAttribute("class", "btn stop");
        btnLeft.innerText = "STOP";
        btnRight.setAttribute("class", "btn split");
        btnRight.innerText = "SPLIT";
        state = "Running";
        chronometer.startClick();
    } else {
        btnLeft.setAttribute("class", "btn start");
        btnLeft.innerText = "START";
        btnRight.setAttribute("class", "btn reset");
        btnRight.innerText = "RESET";
        state = "Stopped";
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (state === "Stopped") {
        chronometer.resetClick();
        printTime(chronometer.twoDigitsNumber(chronometer.getMinutes()), chronometer.twoDigitsNumber(chronometer.getSeconds()), chronometer.twoDigitsNumber(chronometer.getmiliSeconds()));
        list.innerHTML = '<ol id="splits"></ol>';
    } else {
        let toInsert = document.createElement("li");
        toInsert.innerText = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getmiliSeconds())}`;
        list.appendChild(toInsert);
    }
});
