var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    printSeconds();
    printMinutes();
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes.substr(0,1);
    minUni.innerHTML = chronometer.minutes.substr(1,1);
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds.substr(0,1);
    secUni.innerHTML = chronometer.seconds.substr(1,1);
}

function printMilliseconds() {

}

function printSplit() {

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

}

// Start/Stop Button
var winTimeId = -1;

btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START") {
        btnLeft.innerText = "STOP";
        btnLeft.className = "btn stop";
        btnRight.innerText = "SPLIT";
        btnRight.className = "btn split";
        chronometer.startClick();
        winTimeId=window.setInterval(printTime, 10);

    } else {
        btnLeft.innerText = "START";
        btnLeft.className = "btn start";
        btnRight.innerText = "RESET";
        btnRight.className = "btn reset";
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML ==="RESET") {
        chronometer.resetClick();
        printTime();
    } else {
        chronometer.splitClick();
    }
clearInterval(winTimeId);
});

//STOP CLICK
Chronometer.prototype.stopClick = function () {
    if (-1 != this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = -1;
    }
};
