var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let running = 0;

function printTime() {
    printMinutes()
    printSeconds()
}

function printMinutes() {
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printMilliseconds() {

}

function printSplit() {
    let a = document.createElement('li')
    a.innerText = chronometer.splitClick();
    document.querySelector('#splits').appendChild(a);
}

function clearSplits() {
    let b = document.getElementById('splits');
    while(b.firstChild){
        b.removeChild(b.firstChild);
    }
}

function setStopBtn() {
    btnLeft.innerText = 'STOP';
    btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
    btnRight.innerText = 'SPLIT';
    btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
    btnLeft.innerText = 'START'
    btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
    btnRight.innerText = 'RESET';
    btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(document.getElementById('btnLeft').innerText === 'START'){
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
        running = setInterval(() => {
            printTime()
        }, 1000);
    }else{
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
        clearInterval(running);
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerText === 'RESET'){
        chronometer.resetClick();
        printTime();
        clearSplits();
    }else{
        printSplit();
    }
});
