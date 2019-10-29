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
    let min = chronometer.getMinutes()
    let digMin = chronometer.twoDigitsNumber(min)
    minUni.innerText = digMin[1]
    minDec.innerText = digMin[0]
}

function printSeconds() {
    let sec = chronometer.getSeconds()
    let digSec = chronometer.twoDigitsNumber(sec)
    secUni.innerText = digSec[1]
    secDec.innerText = digSec[0]
}

function printMilliseconds() {

}

function printSplit() {
    let parent = document.getElementsByTagName('ol')[0]
    const li = document.createElement("li")
    let min = chronometer.getMinutes()
    let digMin = chronometer.twoDigitsNumber(min)
    let sec = chronometer.getSeconds()
    let digSec = chronometer.twoDigitsNumber(sec)
    li.innerText = `${digMin}:${digSec}`
    parent.appendChild(li)
}

function clearSplits() {
    chronometer.resetClick()
    let parent = document.getElementsByTagName("ol")[0]
    parent.innerHTML = ""
}

function setStopBtn() {
    btnLeft.innerText = "STOP";
    btnLeft.className = "btn stop"
}

function setSplitBtn() {
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split"
}

function setStartBtn() {
    btnLeft.innerText = "STAR";
    btnLeft.className = "btn start"
}

function setResetBtn() {
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className === "btn stop") {
        chronometer.stopClick()
        setStartBtn()
        setResetBtn()
    } else {
        chronometer.startClick()
        setInterval(() => printTime(), 1000)
        setStopBtn()
        setSplitBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className === "btn split"){
        printSplit()
    }else{
        clearSplits()
    }
});