var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splitList = document.getElementById('splits');
var currentMinutes;
var currentSeconds;


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    currentMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.textContent = currentMinutes[0];
    minUni.textContent = currentMinutes[1];
}

function printSeconds() {
    currentSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.textContent = currentSeconds[0];
    secUni.textContent = currentSeconds[1];
}

function printMilliseconds() {

}

function printSplit() {
    splitList.innerHTML += `<li>${currentMinutes}:${currentSeconds}</li>`;
}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.textContent = "STOP";
}

function setSplitBtn() {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.textContent = "SPLIT";
}

function setStartBtn() {
    btnLeft.classList.add('start');
    btnLeft.classList.remove('stop');
    btnLeft.textContent = "START";
}

function setResetBtn() {
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains("start")) {
        chronometer.startClick(printTime);
        setStopBtn();
        setSplitBtn();
    } else if (btnLeft.classList.contains("stop")) {
        chronometer.stopClick();
        setResetBtn();
        setStartBtn();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains("reset")) {
        chronometer.resetClick(printTime, splitList);

    } else if (btnRight.classList.contains("split")) {
        chronometer.splitClick(printSplit);
    }
});