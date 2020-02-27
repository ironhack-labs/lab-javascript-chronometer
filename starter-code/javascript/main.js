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
    let mins = chrono.twoDigitsNumber(min)
    minDec.innerHTML = mins[0];
    minUni.innerHTML = mins[1];
}

function printSeconds() {
    let sec = chrono.getSeconds()
    let secs = chrono.twoDigitsNumber(sec)
    secDec.innerHTML = secs[0];
    secUni.innerHTML = secs[1];
}

// function printMilliseconds() {
// }

function printSplit() {
    let $li = document.createElement('li');
    $li.innerText = chrono.splitClick();
    splitsList.appendChild($li);
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