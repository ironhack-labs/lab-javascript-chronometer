const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {

    printMinutes()
    printSeconds()
    printMilliseconds()

}

function printMinutes() {

    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())

    minDecElement.innerText = minutes[0]
    minUniElement.innerText = minutes[1]

}

function printSeconds() {

    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())

    secDecElement.innerText = seconds[0]
    secUniElement.innerText = seconds[1]

}

// ==> BONUS
function printMilliseconds() {

    const milliSeconds = chronometer.twoDigitsNumber(chronometer.getmilliSeconds())

    milDecElement.innerText = milliSeconds[0]
    milUniElement.innerText = milliSeconds[1]
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

}

function setResetBtn() {

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
    // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    // ... your code goes here
});