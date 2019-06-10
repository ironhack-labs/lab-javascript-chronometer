var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits = document.getElementById('splits');


function printTime(minutes, seconds) {
    printMinutes(minutes);
    printSeconds(seconds);
}

function printMinutes(minutes) {
    minDec.innerText = chronometer.twoDigitsNumber(minutes)[0];
    minUni.innerHTML = chronometer.twoDigitsNumber(minutes)[1];
}

function printSeconds(seconds) {
    secDec.innerText = chronometer.twoDigitsNumber(seconds)[0];
    secUni.innerText = chronometer.twoDigitsNumber(seconds)[1];
}

function printMilliseconds() {

}

function printSplit() {
    let currentMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    let currentSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    splits.innerHTML += `<li>${currentMinutes}:${currentSeconds}</li>`;
}

function clearSplits() {
    splits.innerHTML = '';
}

function setStopBtn() {
    btnLeft.className = 'btn stop';
    btnLeft.innerText = 'STOP';
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
    btnLeft.className = 'btn start';
    btnLeft.innerText = 'START';
}

function setResetBtn() {
    btnRight.className = 'btn reset';
    btnRight.innerText = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.getAttribute('class').includes('start')) {
        setStopBtn();
        setSplitBtn();
    
        chronometer.startClick();

    setInterval(()=>{ 
            printTime(chronometer.getMinutes(), chronometer.getSeconds());
        }, 1000);

    } else {
        setStartBtn();
        setResetBtn();

        chronometer.stopClick();
        

    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.getAttribute('class').includes('reset')) { 
        printTime(0,0);
        chronometer.resetClick();
        clearSplits();

    } else {
        printSplit();
    }
});
