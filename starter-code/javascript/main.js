var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splits = document.getElementById("splits");


function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds()
}

function printMinutes() {
    var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
    minUni.innerHTML = minutes[1];
    minDec.innerHTML = minutes[0];
}

function printSeconds() {
    var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {
    var miliseconds = chronometer.twoDigitsNumber(chronometer.setMilliseconds());
    milDec.innerHTML = miliseconds[0];
    milUni.innerHTML = miliseconds[1];
}

function printSplit() {
    newList.innerHTML = chronometer.minutes + " : " + chronometer.seconds + " : " + chronometer.miliseconds;
}

function clearSplits() {
    splits.removeChild(list.childNodes[0]);
}

function setStopBtn() {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
}

function setResetBtn() {
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML == "START") {
        chronometer.startClick();
        setInterval(printTime(), 1000);
        setStopBtn();
    } else {
        chronometer.stopClick();
        setStartBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML == "RESET") {
        chronometer.resetClick();
        setSplitBtn();
    } else {
        chronometer.splitClick();
        printSplit();
        setResetBtn();
    }

});