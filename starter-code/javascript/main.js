let parent = document.querySelector("ol")
var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {
    printMinutes()
    printSeconds()
}

function printMinutes() {

    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerText = minutes[0]
    minUni.innerText = minutes[1]
}


function printSeconds() {

    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())

    secDec.innerText = seconds[0]
    secUni.innerText = seconds[1]

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

    let ol = document.querySelector("ol")
    ol.innerHTML = ""


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
    switch (chronometer.status) {
        case "Stopped":
            chronometer.startClick()
            btnLeft.classList.remove("start")
            btnLeft.classList.add("stop")
            chronometer.status = "Running"
            btnLeft.innerText = "STOP"
            btnRight.classList.add("split")
            btnRight.classList.remove("reset")
            btnRight.innerText = "SPLIT"
            break
        case "Running":
            chronometer.stopClick()
            btnLeft.classList.remove("stop")
            btnLeft.classList.add("start")
            chronometer.status = "Stopped"
            btnLeft.innerText = "START"
            btnRight.classList.add("reset")
            btnRight.classList.remove("split")
            btnRight.innerText = "RESET"
            break
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    switch (chronometer.status) {
        case "Stopped":
            chronometer.resetClick()
            clearSplits()
            break
        case "Running":
            chronometer.splitClick()
            break
    }

});