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
    printMinutes(chronometer.getMinutes());
    printSeconds(chronometer.getSeconds());
    printMilliseconds(chronometer.getMiliSeconds());
}

function printMinutes(min) {
    min = chronometer.twoDigitsNumber(min).split("");
    minDec.innerText = min[0];
    minUni.innerText = min[1];
}

function printSeconds(sec) {
    sec = chronometer.twoDigitsNumber(sec).split("");
    secDec.innerText = sec[0];
    secUni.innerText = sec[1];
}

function printMilliseconds(miliseconds) {
    miliseconds = chronometer.twoDigitsNumber(miliseconds).split("");
    milDec.innerText = miliseconds[0];
    milUni.innerText = miliseconds[1];
}

function printSplit() {
    document.querySelector('#splits').insertAdjacentHTML('beforeend',`<li>${chronometer.splitClick()}</li>`);
}

function clearSplits() {
    document.querySelector('#splits').innerHTML = '';
}

function setStopBtn() {
    btnLeft.innerText = 'STOP';
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
}

function setSplitBtn() {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
    btnLeft.innerText = 'START';
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
}

function setResetBtn() {
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerText = 'RESET';

}
let showInterval = undefined;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (this.classList.contains('start')) {
        setStopBtn();
        setSplitBtn();
        showInterval = setInterval(() => {
            printTime();
        }, 10);
        chronometer.startClick();
    } else {
        setStartBtn();
        setResetBtn();
        clearInterval(showInterval);
        showInterval = undefined;
        chronometer.stopClick();
    }
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains('split')) {
        printSplit();
    } else {
        chronometer.resetClick();
        printTime();
        clearSplits();
    }
});
