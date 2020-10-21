const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
    printMinutes()
    printSeconds()
}

function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
}

function printSplit() {
    let newSplit = document.createElement('li')
    newSplit.innerHTML = `00:${chronometer.splitClick()}`
    splits.appendChild(newSplit)
}

function clearSplits() {
    splits.innerHTML = ''
}

function setStopBtn() {
    btnLeft.classList.toggle('start')
    btnLeft.classList.toggle('stop')
    btnLeft.innerHTML = 'STOP'

}

function setSplitBtn() {
    btnRight.classList.toggle('reset')
    btnRight.classList.toggle('split')
    btnRight.innerHTML = 'SPLIT'

}

function setStartBtn() {
    btnLeft.classList.toggle('start')
    btnLeft.classList.toggle('stop')
    btnLeft.innerHTML = 'START'
}

function setResetBtn() {
    btnRight.classList.toggle('reset')
    btnRight.classList.toggle('split')
    btnRight.innerHTML = 'RESET'

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if (btnLeft.innerHTML === 'START') {
        chronometer.startClick(printTime)
        setStopBtn()
        setSplitBtn()
    } else {
        chronometer.stopClick()
        setStartBtn()
        setResetBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.innerHTML === 'RESET') {
        chronometer.resetClick()
        printTime()
        clearSplits()
    } else {
        printSplit()
    }
});