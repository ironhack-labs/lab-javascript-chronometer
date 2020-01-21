var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let ol = document.getElementById("splits")


function printTime() {
    return printMinutes() + " : " + printSeconds()

}


function printMinutes() {
    return chronometer.getMinutes()
}

function printSeconds() {
    return chronometer.getSeconds()
}


function printMilliseconds() {
    let miliseconds = chronometer.getSeconds / 1000
    miliseconds.toString()
    let milSec2 = miliseconds.slice(-2)
    return milSec2
}

function printSplit() {
    return chronometer.twoDigitsNumber(printMinutes()) + " : " + chronometer.twoDigitsNumber(printSeconds())
}

function clearSplits() {
    ol.innerHTML = ""
}
clearSplits()

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
    if (btnLeft.innerHTML === "START") {
        chronometer.startClick()
        setInterval(() => {
            secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())
            secUni.innerHTML = ""
            minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())
            minUni.innerHTML = ""
        }, 1000);

        btnLeft.innerHTML = "STOP"
        btnLeft.style.backgroundColor = "#f14949"
        btnRight.innerHTML = "SPLIT"
        btnRight.style.backgroundColor = "#0851ab"

    } else {
        chronometer.stopClick()
        btnLeft.innerHTML = "START"
        btnLeft.style.backgroundColor = "#5fca5f"
        btnRight.innerHTML = "RESET"
        btnRight.style.backgroundColor = "#908e8e"
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML === "SPLIT") {
        let ol = document.getElementById("splits")
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(printSplit()))
        ol.appendChild(li)
    } else {
        chronometer.stopClick()
        chronometer.resetClick()
        clearSplits()
    }
});