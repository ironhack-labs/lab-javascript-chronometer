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

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {
    let ilSplit = document.createElement('li');
    ilSplit.innerHTML = chronometer.splitClick();
    let parent = document.getElementById('splits');
    parent.appendChild(ilSplit);
}

function clearSplits() {
    let parent = document.getElementById('splits');
    parent.innerHTML = '';
}

function setStopBtn() {
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerHTML = 'START';
}

function setSplitBtn() {
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerHTML = 'RESET';
}

function setStartBtn() {
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerHTML = 'STOP';
}

function setResetBtn() {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
