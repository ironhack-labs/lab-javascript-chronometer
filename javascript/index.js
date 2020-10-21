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

function printTime(num1, num2) {
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
    // ... your code goes here
}

function clearSplits() {
    // ... your code goes here
}

function setStopBtn() {
    // ... your code goes here
}

function setSplitBtn() {
    // ... your code goes here
}

function setStartBtn() {
    // ... your code goes here
}

function setResetBtn() {
    // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    btnLeft.classList.toggle('start')
    btnLeft.classList.toggle('stop')
    btnRight.classList.toggle('reset')
    btnRight.classList.toggle('split')
    if (btnLeft.innerHTML === 'START') {
        btnLeft.innerHTML = 'STOP'
        chronometer.stopClick()
    } else {
        btnLeft.innerHTML = 'START'
        chronometer.startClick(printTime)
    }
    if (btnRight.innerHTML === 'RESET') {
        btnRight.innerHTML = 'SPLIT'
    } else {
        btnRight.innerHTML = 'RESET'
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.innerHTML === 'RESET') {
        chronometer.resetClick()
    } else {
        chronometer.splitClick()
    }
});