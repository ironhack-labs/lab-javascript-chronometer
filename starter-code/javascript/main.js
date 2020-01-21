var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let splits = document.querySelector('#splits')
let printTimeIntervalId


function printTime() {
    minDec.innerText = printMinutes()[0]
    minUni.innerText = printMinutes()[1]
    secDec.innerText = printSeconds()[0]
    secUni.innerText = printSeconds()[1]
    milDec.innerText = printMilliseconds()[0]
    milUni.innerText = printMilliseconds()[1]
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    let minutesArr = minutes.split('')
    return minutesArr
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    let secondsArr = seconds.split('')
    return secondsArr
}

function printMilliseconds() {
    let milisecond = chronometer.twoDigitsNumber(chronometer.getMiliseconds())
    let milisecondArr = milisecond.split('')
    console.log(milisecondArr)
    return milisecondArr.reverse().splice(0, 2).reverse()
}

function printSplit() {
    splits.appendChild()
}

function clearSplits() {
    splits.innerHTML = ''
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
btnLeft.addEventListener('click', function () {
    btnLeft.classList.toggle("stop")
    btnRight.classList.toggle("split")
    if (btnLeft.innerText == "START") {
        btnLeft.innerText = "STOP"
        chronometer.startClick()
    } else {
        btnLeft.innerText = "START"
        chronometer.stopClick()
        clearInterval(printTimeIntervalId)
    }
    if (btnRight.innerText == "RESET") {
        btnRight.innerText = "SPLIT"
    } else {
        btnRight.innerText = "RESET"
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerText == "RESET") {
        chronometer.resetClick()
        clearSplits()
        printTime()
    } else {
        let newSplit = document.createElement('li')
        newSplit.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())} : ${chronometer.twoDigitsNumber(chronometer.getSeconds())}`
        splits.appendChild(newSplit)
    }

});