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
    chronometer.intervalId = setInterval(() => {
        chronometer.startClick();
        printSeconds();
        printMinutes();
      }, 1000);
}
function format (time){
    return chronometer.twoDigitsNumber(time)
}
function printMinutes() {
    let mins = format(chronometer.getMinutes());
    minDec.innerHTML = mins[0];
    minUni.innerHTML = mins[1];
}

function printSeconds() {
    let secs = format(chronometer.getSeconds());
    secDec.innerHTML = secs[0];
    secUni.innerHTML = secs[1];
}

function printMilliseconds() {
    
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
    btnLeft.classList.replace("start", "stop");
    btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
    btnRight.classList.replace("reset", "split");
    btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
    btnLeft.classList.replace("stop", "start");
    btnLeft.innerHTML = 'START';
}

function setResetBtn() {
    btnRight.classList.replace("split", "reset");
    btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    if (this.classList.contains('start')){
        setStopBtn();
        setSplitBtn();
        printTime();
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (this.classList.contains('reset')){
        chronometer.resetClick();
        printTime();
    } else {
        printSplit(chronometer.splitClick());
    }
});
