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
    printSeconds()
    printMinutes()
}

function printMinutes() {
    minDec.value.innerHTML = '1'
    minUni.value.innerHTML = '1'
}

function printSeconds() {
    secDec.value.innerHTML = getSeconds()
    secUni.value.innerHTML = getSeconds()
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
    if (btnLeft.className === 'btn start') {
        startClick()
    }
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.onclick = function () {
    if (btnLeft.className === 'btn start') {
        btnLeft.className = 'btn stop'
        btnLeft.innerHTML = 'STOP'
        btnRight.className = 'btn split'
        btnRight.innerHTML = 'SPLIT'

    } else if (btnLeft.className === 'btn stop') {
        btnLeft.className = 'btn start'
        btnLeft.innerHTML = 'START'
        btnRight.className = 'btn reset'
        btnRight.innerHTML = 'RESET'
    }
};

// Reset/Split Button
btnRight.onclick = function () {
    if (btnRight.className === 'btn reset') {
        btnRight.className = 'btn split'
        btnRight.innerHTML = 'SPLIT'
        btnLeft.className = 'btn stop'
        btnLeft.innerHtml = 'STOP'
    } else if (btnRight.className === 'btn split') {
        btnRight.className = 'btn reset'
        btnRight.innerHTML = 'RESET'
        btnLeft.ClassName = 'btn start'
        btnLeft.innerHTML = 'START'
    }
};