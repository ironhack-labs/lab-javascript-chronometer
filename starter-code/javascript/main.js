var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits = document.querySelector('#splits')

let timerRunning = false

let Chrono = new Chronometer
let splitTimes = []

let resetPressCounter = 0

function printTime() {
    printMinutes()
    printSeconds()
}

function printMinutes() {
    let min = Chrono.twoDigitsNumber(Chrono.getMinutes())
    minDec.textContent = min[0]
    minUni.textContent = min[1]
}

function printSeconds() {
    let sec = Chrono.twoDigitsNumber(Chrono.getSeconds())
    secDec.textContent = sec[0]
    secUni.textContent = sec[1]
}

function printMilliseconds() {

}

function printSplit() {
    // for (let n=0; n<splitTimes.length; n++){

    // }
    let newSplit = document.createElement('li')
    newSplit.textContent = splitTimes[splitTimes.length - 1]
    debugger
    splits.appendChild(newSplit)
}

function clearSplits() {
    splitTimes = []
    splits.innerHTML=''
}

function setStopBtn() {
    Chrono.stopClick()
}

function setSplitBtn() {
    splitTimes.push(Chrono.splitClick())
    
}

function setStartBtn() {
    Chrono.startClick()
}

function setResetBtn() {
    Chrono.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    if (!timerRunning) {
        btnLeft.classList.remove('start')
        btnRight.classList.remove('reset')
        btnLeft.classList.add('stop')
        btnRight.classList.add('split')
        btnLeft.textContent = 'STOP'
        btnRight.textContent = 'SPLIT'
        timerRunning = true
        setStartBtn()
        

    } else if (timerRunning) {
        btnLeft.classList.remove('stop')
        btnRight.classList.remove('split')
        btnLeft.classList.add('start')
        btnRight.classList.add('reset')
        btnLeft.textContent = 'START'
        btnRight.textContent = 'RESET'
        timerRunning = false

        setStopBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (!timerRunning){
        Chrono.resetClick()
        resetPressCounter++
        if (resetPressCounter >= 3){
            debugger
            clearSplits()
            resetPressCounter = 0
        }
    } else {
        splitTimes.push(Chrono.splitClick())
        printSplit()
    }
});


setInterval(() => {
    printTime()
}, 100);