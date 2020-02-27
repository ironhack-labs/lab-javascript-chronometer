var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let splitsList = document.getElementById("splits")


let chrono = new Chronometer();
let anIntervalId = 0;

function printTime() {
    printMinutes()
    printSeconds()
}

function printMinutes() {
    let min = chrono.getMinutes()
    let twoDigitMin = chrono.twoDigitsNumber(min)
    minDec.innerHTML = twoDigitMin[0];
    minUni.innerHTML = twoDigitMin[1];
}

function printSeconds() {
    let sec = chrono.getSeconds()
    let twoDigitSec = chrono.twoDigitsNumber(sec)
    secDec.innerHTML = twoDigitSec[0];
    secUni.innerHTML = twoDigitSec[1];
}

// function printMilliseconds() {
// }

function printSplit() {
    let list = document.createElement('li');
    list.innerText = chrono.splitClick();
    splitsList.appendChild(list);
}

function clearSplits() {
    splitsList.innerHTML = "";
}

function setStopBtn() {
    btnLeft.innerText = "STOP";
    btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
    btnRight.innerText = "SPLIT";
    btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
    btnLeft.innerText = "START";
    btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
    btnRight.innerText = "RESET";
    btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START"){
        chrono.startClick()
        setStopBtn();
        setSplitBtn();
        anIntervalId = setInterval(function (){
            printTime()}, 1000);
    }
    else if (btnLeft.innerHTML === "STOP"){
        chrono.stopClick();
        setStartBtn();
        setResetBtn();
        clearInterval(anIntervalId);
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className === "btn split") {
        chrono.splitClick();
        printSplit();
    }
    else if (btnRight.className === "btn reset") {
        chrono.resetClick();
        clearSplits();
        setResetBtn();
        printTime();
    }
});