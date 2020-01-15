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
    let minToPrint = chronometer.getMinutes().toString().split('');
    minUni.textContent = minToPrint[1];
    minDec.textContent = minToPrint[0];
}

function printSeconds() {
    let secToPrint = chronometer.getSeconds().toString().split('');
    secUni.textContent = secToPrint[1];
    secDec.textContent = secToPrint[0];
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
btnLeft.addEventListener('click', function() {
    if (chronometer.isRunning) {
        chronometer.stopClick();
        btnLeft.setAttribute('class', 'btn start');
        btnLeft.textContent = "START";
        btnRight.setAttribute('class', 'btn reset');
        btnRight.textContent = "RESET";
    } else {
        chronometer.startClick(printTime);
        btnLeft.setAttribute('class', 'btn stop');
        btnLeft.textContent = "STOP";
        btnRight.setAttribute('class', 'btn split');
        btnRight.textContent = "SPLIT";
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (chronometer.isRunning) {
        let splitTime = chronometer.splitClick();
        splits.innerHTML += `<li>${splitTime}</li>`;
    } else {
        chronometer.resetClick();
        printTime();
        splits.innerHTML = '';
    }
});
