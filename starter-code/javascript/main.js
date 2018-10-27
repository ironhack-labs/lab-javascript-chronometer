var chronometer = new Chronometer();
var startStop     = document.getElementById('btnLeft');
var btnReset    = document.getElementById('btnRight');
var btnMiddle   = document.getElementById('btnMiddle');
var minDec      = document.getElementById('minDec');
var secDec      = document.getElementById('secDec');
var milDec      = document.getElementById('milDec');
var splits      = document.getElementById('splits');




function printTime() {
    
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes;
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds;
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.milliseconds;
}

function printSplit() {
    splits.innerHTML += '<div>' + chronometer.minutes + ":" + chronometer.seconds + '</div>';
}

function clearSplits() {

}

function setStopBtn() {
    startStop.classList.remove('stop');
        startStop.classList.add('start');
        startStop.innerHTML = 'START';
        chronometer.stopClick();
}

function setStartBtn() {
    startStop.classList.remove('start');
        startStop.classList.add('stop');
        startStop.innerHTML = 'STOP';
        chronometer.startClick();
        setInterval(() => {
            printMilliseconds();
        },1);
        setInterval(() => {
            printSeconds();
            printMinutes();
        },1000);
}

function setResetBtn() {
    chronometer.resetClick();
        secDec.innerHTML = chronometer.currentTime;
        minDec.innerHTML = chronometer.currentTime;
        
}


// Start/Stop Button
startStop.addEventListener('click', function () {
    setInterval(printSeconds(),1000);
    if (startStop.classList.contains('start')) {
        setStartBtn();
    } else {
        setStopBtn();
    } 
});

btnReset.addEventListener('click', function () {
    setResetBtn();
});

btnMiddle.addEventListener('click', function () {
    printSplit();
});
