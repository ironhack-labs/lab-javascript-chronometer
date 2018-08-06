var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

function printTime() {
    console.log(chronometer.seconds);
    var minutes = chronometer.minutes.split('');
    var seconds = chronometer.seconds.split('');
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];
    secDec.innerText = seconds[0];
    secUni.innerText = seconds[1];
}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if (btnLeft.innerText == 'STOP') {
        btnLeft.className = 'btn start';
        btnLeft.innerText = 'START';
        btnRight.className = 'btn reset';
        btnRight.innerText = 'RESET';
        //hier start:
    } else {
        btnLeft.className = 'btn stop';
        btnLeft.innerText = 'STOP';
        btnRight.className = 'btn split';
        btnRight.innerText = 'SPLIT';
        chronometer.startClick();
        var intervalId = setInterval(printTime, 1000);
    }
});

// // Reset/Split Button
// btnRight.addEventListener('click', function() {});
