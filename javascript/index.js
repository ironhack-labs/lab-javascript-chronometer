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
    printMinutes();
    printSeconds();
}

function printMinutes() {
    let minutes = chronometer.getMinutes();
    minutes = chronometer.twoDigitsNumber(minutes);
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    let seconds = chronometer.getSeconds();
    seconds = chronometer.twoDigitsNumber(seconds);
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}
// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
}

function printSplit() {
    let split = chronometer.splitClick();
    let newLi = document.createElement('li');
    let innerText = document.createTextNode(split);
    newLi.appendChild(innerText);
    splits.appendChild(newLi);
}

function clearSplits() {
    splits.innerHTML = '';
}

function setStopBtn() {
    btnLeft.innerHTML = 'STOP';
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
}

function setSplitBtn() {
    btnRight.innerHTML = 'SPLIT';
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
}

function setStartBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
}

function setResetBtn() {
    btnRight.innerHTML = 'RESET';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if (btnLeft.classList.contains('start')) {
        setStopBtn();
        setSplitBtn();
        chronometer.startClick(printTime);
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});
// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.classList.contains('split')) {
        printSplit()
    } else {
        chronometer.resetClick();
        minDec.innerHTML = 0;
        minUni.innerHTML = 0;
        secDec.innerHTML = 0;
        secUni.innerHTML = 0;
        clearSplits();
    }
});