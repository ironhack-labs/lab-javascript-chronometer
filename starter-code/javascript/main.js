var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let fatherLi = document.getElementById('splits');


function printTime() {
    printSeconds()
    printMinutes()
    printMilliseconds()
}

function printMinutes() {
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[2]
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
}

function printMilliseconds() {
    milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1]
    milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0]
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
btnLeft.onclick = function () {
    if (btnLeft.className === 'btn start') {
        btnLeft.className = 'btn stop'
        btnLeft.innerHTML = 'STOP'
        btnRight.className = 'btn split'
        btnRight.innerHTML = 'SPLIT'
        chronometer.startClick()

    } else if (btnLeft.className === 'btn stop') {
        btnLeft.className = 'btn start'
        btnLeft.innerHTML = 'START'
        btnRight.className = 'btn reset'
        btnRight.innerHTML = 'RESET'
        chronometer.stopClick()
    }
};

// Reset/Split Button
btnRight.onclick = function () {
    if (btnRight.className === 'btn reset') {
        btnLeft.className = 'btn start'
        btnLeft.innerHtml = 'STOP'
        chronometer.resetClick()
        printTime()
        fatherLi.innerHTML = ""
    } else if (btnRight.className === 'btn split') {
        btnLeft.ClassName = 'btn stop'
        btnLeft.innerHTML = 'STOP'
        let createLi = document.createElement('li')
        createLi.innerText = chronometer.splitClick()
        fatherLi.appendChild(createLi)
    }
};