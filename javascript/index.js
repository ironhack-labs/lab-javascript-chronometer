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
    let sec = chronometer.getSeconds();
    let min = chronometer.getMinutes();
    let secTwoDigits = chronometer.computeTwoDigitNumber(sec);
    let minTwoDigits = chronometer.computeTwoDigitNumber(min);


    secDecElement.innerText = secTwoDigits[0];
    secUniElement.innerText = secTwoDigits[1];
    minDecElement.innerText = minTwoDigits[0];
    minUniElement.innerText = minTwoDigits[1];
    printMilliseconds();
}

function printMinutes() {
    return chronometer.getMinutes();
}

function printSeconds() {
    return chronometer.getSeconds();
}

// ==> BONUS
function printMilliseconds() {
    let milliseconds = chronometer.milliseconds.toString().split('')
    if (milliseconds.length < 2) {
        milUniElement.textContent = 0;
        milDecElement.textContent = milliseconds[0];
    } else {
        milUniElement.textContent = milliseconds[1];
        milDecElement.textContent = milliseconds[0];
    }
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
btnLeftElement.addEventListener('click', () => {
    // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    // ... your code goes here
});