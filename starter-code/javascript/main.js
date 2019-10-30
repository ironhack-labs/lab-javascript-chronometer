var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById('splits');

function printTime() {
    printSeconds();
    printMinutes();
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerText = seconds[0];
    secUni.innerText = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    const liElement = document.createElement('li');
    liElement.innerText = `${minutes}:${seconds}`;
    splitList.appendChild(liElement);
}

function clearSplits() {
    splitList.innerHTML = '';
}

function setStopBtn() {
    btnLeft.innerText = 'STOP';
    btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
    btnRight.innerText = 'SPLIT';
    btnRight.setAttribute ('class', 'btn split');
}

function setStartBtn() {
    btnLeft.innerText = 'START';
    btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
    btnRight.innerText = 'RESET';
    btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className.includes('start')){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        let time = setInterval (() => {
            printTime();
        }, 1000);
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className.includes('reset')) {
        chronometer.resetClick();
        clearSplits();
    } else {
        printSplit();
    }
});
