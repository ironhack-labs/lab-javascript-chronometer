var chronometer = new Chronometer();
// console.log(chronometer)
// console.log(chronometer.startClick())
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
// console.log(minDec.innerText)
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var split = document.getElementById("splits")



function printTime() {}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    // console.log(minutes[0])
    minDec.innerText = minutes[0]
    minUni.innerText = minutes[1]
    // console.log(minutes[1], minutes[0])
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerText = seconds[0]
    secUni.innerText = seconds[1]

}

function printMilliseconds() {

}

function printSplit() {
    const pointList = document.createElement('li')
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    // console.log(minutes)
    // console.log(seconds)

    pointList.innerHTML = `${minutes} : ${seconds}`
    split.appendChild(pointList)
}

function clearSplits() {
    secDec.innerText = 0
    secUni.innerText = 0
    minDec.innerText = 0
    minUni.innerText = 0
    split.innerText = ""
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
    if (btnLeft.innerText === 'START') {
        btnLeft.setAttribute('class', 'btn stop')
        btnLeft.innerText = 'STOP'
        btnRight.setAttribute('class', 'btn split')
        btnRight.innerText = 'SPLIT'
        chronometer.startClick()
    } else {
        btnLeft.setAttribute('class', 'btn start')
        btnLeft.innerText = 'START'
        btnRight.setAttribute('class', 'btn reset')
        btnRight.innerText = 'RESET'
        chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerText === 'RESET') {
        chronometer.resetClick()
    } else {
        printSplit()
    }


});