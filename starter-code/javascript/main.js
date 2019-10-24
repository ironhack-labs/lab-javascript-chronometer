var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splits = document.getElementById('splits')


function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
    secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {

}

function printSplit() {
    splits.innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}</li>`
}

function clearSplits() {
    splits.innerHTML = "";
    chronometer.resetClick();
}

function setStopBtn() {
    btnLeft.classList.add('stop')
    btnLeft.classList.remove('start')
    btnLeft.innerHTML = 'STOP'
    chronometer.stopClick();
}

function setSplitBtn() {
    btnRight.classList.add('split')
    btnRight.classList.remove('reset')
    btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
    btnLeft.classList.add('start')
    btnLeft.classList.remove('stop')
    btnLeft.innerHTML = 'START'
}

function setResetBtn() {
    btnRight.classList.add('reset')
    btnRight.classList.remove('split')
    btnRight.innerHTML = 'RESET'

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains('start')) {
        setStopBtn()
        setSplitBtn()
        chronometer.startClick()
        printTime()
    } else {
        setStartBtn()
        setResetBtn()
        chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (btnRight.classList[1] === 'reset') {
        clearSplits()
    } else {
        printSplit()
    }

});

setInterval(function () {
    printTime();
}, 1)