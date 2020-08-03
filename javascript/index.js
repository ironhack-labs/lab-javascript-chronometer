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
    setInterval(() => {
        printMinutes();
        printSeconds();
    }, 1000);
}

function printMinutes() {
    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];
}

function printSeconds() {
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerText = seconds[0];
    secUni.innerText = seconds[1];
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
    const atr = btnLeft.getAttribute('class');
    if (atr.includes('start')) {
        chronometer.startClick();
        btnLeft.setAttribute('class', 'btn stop');
        btnLeft.innerText = 'STOP';
        btnRight.setAttribute('class', 'btn split');
        btnRight.innerText = 'SPLIT';
        printTime();
    } else if (atr.includes('stop')) {
        chronometer.stopClick();
        btnLeft.setAttribute('class', 'btn start');
        btnLeft.innerText = 'START';
        btnRight.setAttribute('class', 'btn reset');
        btnRight.innerText = 'RESET';
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    const atr = btnRight.getAttribute('class');
    if (atr.includes('split')) {
        chronometer.splitClick();
    } else if (atr.includes('reset')) {
        chronometer.resetClick();
    }
});
