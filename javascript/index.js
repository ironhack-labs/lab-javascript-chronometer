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
    // ... your code goes here
    printMinutes();
    printSeconds();

}

function printMinutes() {
    // ... your code goes here
    minDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
    minUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
    // ... your code goes here
    secDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
    secUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
}

function printSplit() {
    // ... your code goes here
    splitsElement.textContent = chronometer.split();
}

function clearSplits() {
    // ... your code goes here
    splitsElement.innerText = " ";
}

function setStopBtn() {
    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerHTML = 'STOP';
    // ... your code goes here
}

function setSplitBtn() {
    // ... your code goes here
    btnRightElement.className = 'btn split';
    btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {

    btnLeftElement.className = 'btn start'
    btnLeftElement.textContent = 'START'
        // ... your code goes here
}

function setResetBtn() {
    // ... your code goes here
    btnRightElement.className = 'btn reset';
    btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
    // ... your code goes here

    if (btnLeftElement.className.includes('start')) {
        chronometer.start(printTime)
        setStopBtn();
        setSplitBtn();
        btnLeftElement.textContent = 'STOP';


    } else {
        chronometer.stop();
        setStartBtn();
        setResetBtn();
        btnLeftElement.textContent = 'START';

    }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    // ... your code goes here

    if (btnRightElement.className.includes('btn split')) {
        printSplit();
        setResetBtn();

        btnRightElement.textContent = 'RESET';

    } else {
        chronometer.reset();
        clearSplits();
        setSplitBtn();

        btnRightElement.textContent = 'SPLIT';
    }

});