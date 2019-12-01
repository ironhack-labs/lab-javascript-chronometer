var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById('splits');
var interval;

function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
        minutes = minutes.toString().split('');

    minUni.innerHTML = minutes[1];
    minDec.innerHTML = minutes[0];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
        seconds = seconds.toString().split('');

    secUni.innerHTML = seconds[1];
    secDec.innerHTML = seconds[0];
}

function printMilliseconds() {
    let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
        milliseconds = milliseconds.toString().split('');

    milUni.innerHTML = milliseconds[1];
    milDec.innerHTML = milliseconds[0];
}

function printSplit(time) {

    let newSplitItem = document.createElement('li');
        newSplitItem.innerHTML = time;

    splitList.append(newSplitItem);
}

function resetTime() {
    minUni.innerHTML = '0';
    minDec.innerHTML = '0';
    secUni.innerHTML = '0';
    secDec.innerHTML = '0';
    milUni.innerHTML = '0';
    milDec.innerHTML = '0';
}

function clearSplits() {
    chronometer.resetClick();
    splitList.innerHTML = '';
}

function setStopBtn() {
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop';
}

function setSplitBtn() {
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
}

function setStartBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';
}

function setResetBtn() {
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if ([...btnLeft.classList].includes('start')) {
        chronometer.startClick();

        setStopBtn();
        setSplitBtn();

        interval = setInterval(() => {
            printTime();
        }, 1);

    } else {
        chronometer.stopClick();

        setStartBtn();
        setResetBtn();

        clearInterval(interval);
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if ([...btnRight.classList].includes('split')) {
        printSplit(chronometer.splitClick());

    } else {
        clearSplits();
        resetTime();

        clearInterval(interval);
    }
});
