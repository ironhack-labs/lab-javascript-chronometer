var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    printSeconds();
    printMinutes();
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minUni.innerText = minutes[1];
    minDec.innerText = minutes[0];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secUni.innerText = seconds[1];
    secDec.innerText = seconds[0];
}

function printSplit() {
    const splits = document.getElementById('splits');
    const splitList = document.createElement('li');
    splitList.innerText =  chronometer.splitClick();
    splits.appendChild(splitList);
}

function clearSplits() {
    const splits = document.getElementById('splits');
    splits.innerHTML = '';
}

function setStopBtn() {
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerText = 'START';

    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerText = 'RESET'

    chronometer.stopClick();
}

function setStartBtn() {
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerText = 'STOP';

    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerText = 'SPLIT';
    
    chronometer.startClick();
    time = setInterval(() => printTime(), 1000);
}

function setResetBtn() {
    minUni.innerText = 0;
    minDec.innerText = 0;
    secUni.innerText = 0;
    secDec.innerText = 0;
    chronometer.resetClick();
}

let time;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList.contains('start')) {
        setStartBtn();
    } else {
       setStopBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnLeft.classList.contains('start')) {
        clearSplits();
        setResetBtn();
    } else {
        printSplit();
    }
});

console.log(chronometer)
