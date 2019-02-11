'use strict'

var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var list = document.getElementById("splits");

let printTimeId;
let printMillisId;
function printTime() {
    printTimeId = setInterval(function() {
        printSeconds();
        printMinutes();
    }, 1000);

    printMillisId = setInterval(function() {
        printMilliseconds();
    }, 100);
}

function printMinutes() {
    minDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[0];
    minUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[1];
}

function printSeconds() {
    secDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[0];
    secUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[1];
}

function printMilliseconds() {
    let millis = chronometer.setMillis().toString();
    if (millis < 10) {
        millis = "0" + millis;
    }
    milDec.innerHTML = millis[0];
    milUni.innerHTML = millis[1];
}

function printSplit() {
    let li = document.createElement("li");

    li.innerHTML = chronometer.setTime();
    list.appendChild(li);
}

function clearSplits() {
    document.getElementById("splits").innerHTML = "";
    chronometer.resetClick();
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    milDec.innerHTML = "0";
    milUni.innerHTML = "0";
}

function setStopBtn() {     //this = btn classlist [1]
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    setSplitBtn();
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
}

function setStartBtn() {    //this = btn classlist [1]
    btnLeft.innerHTML = "START";
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    setResetBtn();
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    switch (this.classList[1]) {
        case "start":
            setStopBtn();
            chronometer.startClick();
            printTime();
            break;

        case "stop":
            setStartBtn();
            chronometer.stopClick();
            clearInterval(printTimeId);
            clearInterval(printMillisId);
            break;
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    switch (this.classList[1]) {
        case "reset":
            clearSplits();
            break;
        case "split":
            printSplit();
            break;
    }

});