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
    let minutesArray = chronometer.twoDigitsNumber(chronometer.getMinutes()).split('');
    minDec.innerText = minutesArray[0];
    minUni.innerText = minutesArray[1];
}

function printSeconds() {
    let secondsArray = chronometer.twoDigitsNumber(chronometer.getSeconds()).split('');
    secDec.innerText = secondsArray[0];
    secUni.innerText = secondsArray[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
    splits.innerHTML += '<li>' +chronometer.splitClick()+ '</li>';
}

function clearSplits() {
    splits.innerHTML = '';
}

function setStopBtn() {
    btnLeft.classList.replace('stop', 'start');
    btnLeft.textContent = 'START';
    btnRight.classList.replace('split', 'reset');
    btnRight.textContent = 'RESET';
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
    btnLeft.classList.replace('start', 'stop');
    btnLeft.textContent = 'STOP';
    btnRight.classList.replace('reset', 'split');
    btnRight.textContent = 'SPLIT';
}

function setResetBtn() {
    clearSplits();
    minDec.innerText = '0';
    minUni.innerText = '0';
    secDec.innerText = '0';
    secUni.innerText = '0';

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if(btnLeft.classList.contains('start')) {
        setStartBtn();
        chronometer.startClick(printTime);
    }else{
        setStopBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if(btnRight.classList.contains('reset')) {
        setResetBtn();
        chronometer.resetClick();

    }else{
        printSplit();
    }
});
