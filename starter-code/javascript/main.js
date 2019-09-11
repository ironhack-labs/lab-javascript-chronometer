var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let splitsList  = document.getElementById('splits');


function printTime() {
    let minutes = printMinutes();
    let seconds = printSeconds();
    let milliseconds = printMilliseconds();

    milUni.innerHTML = '';
    milDec.innerHTML = milliseconds;
    secUni.innerHTML = '';
    secDec.innerHTML = seconds;
    minUni.innerHTML = '';
    minDec.innerHTML = minutes;
}

function printMinutes() {
    let minutes = chronometer.getMinutes();
    let twoDigitsMin = chronometer.twoDigitsNumber(minutes);
    return twoDigitsMin;
}

function printSeconds() {
    let seconds = chronometer.getSeconds();
    let twoDigitsSec = chronometer.twoDigitsNumber(seconds);
    return twoDigitsSec;
}

function printMilliseconds() {
    let milliseconds = chronometer.getMilliseconds();
    let twoDigitsMilsec = chronometer.twoDigitsNumber(milliseconds);
    return twoDigitsMilsec;
}

function printSplit() {
    let time = chronometer.splitClick();
    let split = document.createElement('LI')
    split.innerHTML = time;
    splitsList.appendChild(split);
}

function clearSplits() {
    let splits = document.querySelectorAll('#splits li')
    for (i = 0; i < splits.length; i++){
        splitsList.removeChild(splits[i]);
    }
}

function setStopBtn() {
    btnLeft.innerHTML = 'STOP';
    btnLeft.classList.replace('start', 'stop');
}

function setSplitBtn() {
    btnRight.innerHTML = 'SPLIT';
    btnRight.classList.replace('reset', 'split');
}

function setStartBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.classList.replace('stop', 'start');
}

function setResetBtn() {
    btnRight.innerHTML = 'RESET';
    btnRight.classList.replace('split', 'reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains('start')){
       setStopBtn();
       setSplitBtn();
       chronometer.startClick();
    } else if (btnLeft.classList.contains('stop')){
       setStartBtn();
       setResetBtn();
       chronometer.stopClick();
    };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains('reset')){
        chronometer.currentTime = 0;
        chronometer.intervalId = 0;
        milUni.innerHTML = '0';
        milDec.innerHTML = '0';
        secUni.innerHTML = '0';
        secDec.innerHTML = '0';
        minUni.innerHTML = '0';
        minDec.innerHTML = '0';
        clearSplits();
    } else if (btnRight.classList.contains('split')){
        printSplit();
    };
});

