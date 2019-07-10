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

}

function printMinutes() {
    let dis_minutes = chronometer.getMinutes()
    console.log(dis_minutes)
    minUni.innerHTML = dis_minutes

}

function printSeconds() {
    let dis_seconds = chronometer.getSeconds()
    console.log(dis_seconds)
    secUni.innerHTML = dis_seconds
}

function printMilliseconds() {

}

function printSplit() {
    let right = document.getElementById("btnRight")
    document.getElementById("btnRight").className
    right.setAttribute("class", "btn split")
    right.innerHTML = "SPLIT"
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
    let right = document.getElementById("btnRight")
    document.getElementById("btnRight").className
    right.setAttribute("class", "btn reset")
    right.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    let left = document.getElementById("btnLeft")
    let class_name = document.getElementById("btnLeft").className
    if (class_name === "btn start") {
        left.setAttribute("class", "btn stop")
        left.innerHTML = "STOP"
        printSplit()
        chronometer.startClick()
        printMinutes()
        printSeconds()

    }
    else
        if (class_name === "btn stop") {
            left.setAttribute("class", "btn start")
            left.innerHTML = "START"
            setResetBtn()
            chronometer.stopClick()
        }




});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    let right = document.getElementById("btnRight")
    let class_name = document.getElementById("btnRight").className
    if (class_name === "btn reset") {
        right.setAttribute("class", "btn split")
        right.innerHTML = "SPLIT"

    }
    else
        if (class_name === "btn split") {
            right.setAttribute("class", "btn reset")
            right.innerHTML = "RESET"
        }
});
