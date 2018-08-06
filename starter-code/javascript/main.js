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
    var callSetTime = chronometer.setTime(printMinutes(), printSeconds(), chronometer.twoDigitsNumber());
    console.log(callSetTime);
}

function printMinutes() {
    chronometer.setMinutes();
}

function printSeconds() {
    chronometer.setSeconds();
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerHTML = 'STOP';
    chronometer.startClick();
    printTime();
}

function setSplitBtn() {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';
    chronometer.resetClick();
}

function setStartBtn() {
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerHTML = 'START';
    chronometer.stopClick();
}

function setResetBtn() {
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if (btnLeft.innerHTML === 'START') setStopBtn();
    else setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.innerHTML === 'RESET') setSplitBtn();
    else setResetBtn();
});
