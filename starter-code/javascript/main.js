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
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]

}

function printSeconds() {
    console.log("srsd")
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.setAttribute("stop");
    stop.innerText = "STOP";
}

function setSplitBtn() {

}

function setStartBtn() {
    btnLeft.innerText = 'START'
    btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
    btnRight.innerText = 'RESET';
    btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if ("stop" == chronometer.status) {
        chronometer.startClick()
        chronometer.status = "run"
        btnLeft.innerText = "STOP"
        btnLeft.classList.add("stop")
        btnLeft.classList.remove("start")
        btnRight.innerText = "SPLIT"
        btnRight.classList.add("split")
        btnRight.classList.remove("reset")

    } else {
        chronometer.stopClick()
        chronometer.status = "stop"
        btnLeft.innerText = "START"
        btnLeft.classList.add("start")
        btnLeft.classList.remove("stop")
        btnRight.innerText = "RESET"
        btnRight.classList.add("reset")
        btnRight.classList.remove("split")
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if ("stop" == chronometer.status) {
        chronometer.resetClick()
        console.log("rset")
    } else {
        chronometer.splitClick()
    }
});