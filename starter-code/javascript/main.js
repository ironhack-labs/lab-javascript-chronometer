const chronometer = new Chronometer();
const btnLeft     = document.getElementById('btnLeft');
const btnRight    = document.getElementById('btnRight');
const minDec      = document.getElementById('minDec');
const minUni      = document.getElementById('minUni');
const secDec      = document.getElementById('secDec');
const secUni      = document.getElementById('secUni');
const milDec      = document.getElementById('milDec');
const milUni      = document.getElementById('milUni');
const splits      = document.getElementById('splits');


function printTime() {
    printSeconds();
    printMinutes();
}

function printMinutes() {
    let mins = chronometer.getMinutes();
    minDec.innerHTML = mins[0];
    minUni.innerHTML = mins[1];
}

function printSeconds() {
    let secs = chronometer.getSeconds();
    secDec.innerHTML = secs[0];
    secUni.innerHTML = secs[1];
}

function printMilliseconds() {
    let mils = chronometer.getMilliseconds();
    milDec.innerHTML = mils[0];
    milUni.innerHTML = mils[1];
}

function printSplit(n) {
    const li = document.createElement('li');
    li.innerHTML = `${n}`;
    splits.appendChild(li);
}

function clearSplits() {
    splits.innerHTML = '';
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    if (this.classList.contains('start')){
        this.classList.replace("start", "stop");
        btnRight.classList.replace("reset", "split");
        this.innerHTML = 'STOP';
        btnRight.innerHTML = 'SPLIT';
        chronometer.startClick();
    } else {
        
        this.classList.replace("stop", "start");
        btnRight.classList.replace("split", "reset");
        this.innerHTML = 'START';
        btnRight.innerHTML = 'RESET';
        chronometer.stopClick();
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (this.classList.contains('reset')){
        chronometer.resetClick();
    } else {
        chronometer.splitClick();
    }
});
