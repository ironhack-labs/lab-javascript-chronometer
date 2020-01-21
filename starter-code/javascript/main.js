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
    printMinutes();
    printSeconds();
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    let mins = minutes.split("");
    minUni.innerHTML = mins[1];
    minDec.innerHTML = mins[0];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    let secs = seconds.split("");
    secUni.innerHTML = secs[1];
    secDec.innerHTML = secs[0];

}

function printMilliseconds() {

}


function printSplit() {
    let list = document.querySelector("#splits")
    let split = document.createElement(`li`)
    split.innerText = (`${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}`)
    list.appendChild(split)
}

function clearSplits() {

}

function setStopBtn() {
    document.querySelector("#btnLeft").innerHTML = "START";
    document.querySelector("#btnLeft").className = "btn start";
    chronometer.stopClick();
}

function setSplitBtn() {
    document.querySelector("#btnRight").innerHTML = "SPLIT";
    document.querySelector("#btnRight").className = "btn split";
    chronometer.splitClick();
}

function setStartBtn() {
    document.querySelector("#btnLeft").innerHTML = "STOP"
    document.querySelector("#btnLeft").className = "btn stop";
    chronometer.startClick(printTime);
}

function setResetBtn() {
    document.querySelector("#btnRight").innerHTML = "RESET";
    document.querySelector("#btnRight").className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (document.querySelector("#btnLeft").innerText == "START") {
        printTime();
        setStartBtn();
        setSplitBtn();
    } else {
        setStopBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (document.querySelector("#btnRight").innerText == "RESET") {


    } else {
        printSplit();

    }
});