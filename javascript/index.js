const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');
const splits = document.getElementById('splits');

function printTime() {
    setInterval(() => {
            printSeconds()
        }, 1000)
        // setInterval(() => {
        //     printMinutes()
        // }, 60000)
}

function printMinutes() {
    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerHTML = minutes[0]
    minUni.innerHTML = minutes[1]
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerText = seconds[0]
    secUni.innerText = seconds[1]
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
    chronometer.startClick()
    printTime();
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    // ... your code goes here
});