let chronometer = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');


function printTime() {
    printSeconds()
    printMinutes()
    // printMilliseconds()
}

function printMinutes() {
    let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = mins[0];
    minUni.innerText = mins[1];
}

function printSeconds() {
    let secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerText = secs[0];
    secUni.innerText = secs[1];
}

function printMilliseconds() {
    let millisecs = chronometer.getMilliSeconds();
    milDec.innerText = millisecs[0];
    minUni.innerText = millisecs[1];
}

function printSplit() {
    let newLi = document.createElement('li');
    document.getElementById('splits').append(newLi);
    newLi.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}`;
}

function clearSplits() {
    document.getElementById('splits').innerHTML = "";
}

function setStopBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList.contains('start')){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
    } 
    else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains('reset')){
        clearSplits();
        chronometer.resetClick();
    } 
    else {
        printSplit();
    }
});
