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
    let counter = 0;
    let interval = setInterval(() => {
        counter++
        console.log(interval);
    }, 1000)
}

function printMinutes() {
    minDecElement.innerText = 8;
    minUniElement.innerText = 5;
}

function printSeconds() {
    secDecElement.innerText = 6;
    secUniElement.innerText = 3;
}

// ==> BONUS
function printMilliseconds() {
    milDecElement.innerText = 9;
    milUniElement.innerText = 2;
}

function printSplit() {
    splitsElement.innerText = '22:33:45';
}

function clearSplits() {
    splitsElement.innerText = '';
}

function setStopBtn() {
    btnLeftElement.style.background = '#5fca5f';
    btnLeftElement.innerText = 'START';
}

function setSplitBtn() {
    btnRightElement.style.background = '#908e8e';
    btnRightElement.innerText = 'RESET';
}

function setStartBtn() {
    btnLeftElement.style.background = '#f14949';
    btnLeftElement.innerText = 'STOP';
}

function setResetBtn() {
    btnRightElement.style.background = '#0851ab';
    btnRightElement.innerText = 'SPLIT';
    clearInterval();
}

// Start/Stop Button
let push = true;
btnLeftElement.addEventListener('click', () => {
    printTime();
    printMinutes();
    printSeconds();
    printMilliseconds();
    if (push) {
        setStartBtn();
        push = false;
    } else {
        setStopBtn();
        push = true;
    }
});

// Reset/Split Button
let click = true;
btnRightElement.addEventListener('click', () => {
    if (click) {
        setResetBtn();
        printSplit();
        click = false;
    } else {
        setSplitBtn();
        clearSplits()
        click = true;
    }
});
