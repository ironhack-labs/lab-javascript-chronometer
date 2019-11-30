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

function printTime() {
    printMinutes();
    printSeconds();
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

}

function printSplit(time) {

    let newSplitItem = document.createElement('li');
        newSplitItem.innerHTML = time;

    splitList.append(newSplitItem);
}

function clearSplits() {

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
    if ([...btnLeft.classList].includes('start')) {
        chronometer.startClick();
        btnLeft.innerHTML = 'STOP';
        btnLeft.className = 'btn stop';
        btnRight.innerHTML = 'SPLIT';
        btnRight.className = 'btn split';

        setInterval(() => {
            printTime();
        }, 1000);

    } else {
        chronometer.stopClick();
        btnLeft.innerHTML = 'START';
        btnLeft.className = 'btn start';
        btnRight.innerHTML = 'RESET';
        btnRight.className = 'btn reset';
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    printSplit(chronometer.splitClick());
});
