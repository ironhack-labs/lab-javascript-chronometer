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
    var intervalId = setInterval(function(){
        printMinutes();
        printSeconds();
    }, 500);
}

function printMinutes() {
    var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
    console.log(minutes);
    var minNums = minutes.split("");
    console.log(minNums);
    minDec.innerText = minNums[0];
    minUni.innerText = minNums[1];
}

function printSeconds() {
    var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
    console.log(seconds);
    var secNums = seconds.split("");
    secDec.innerText = secNums[0];
    secUni.innerText = secNums[1];
}

function printMilliseconds() {

}

function printSplit() {
    var split = document.createElement('li');
    split.innerText = chronometer.setTime();
    document.getElementById('splits').appendChild(split);
}

function clearSplits() {
    document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerText = 'STOP';
}

function setSplitBtn() {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
    btnLeft.classList.add('start');
    btnLeft.classList.remove('stop');
    btnLeft.innerText = 'START';
}

function setResetBtn() {
    btnRight.classList.add('reset');
    btnRight.classList.remove('split');
    btnRight.innerText = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(this.classList.contains('start')) {
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        printTime();
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
        clearInterval(intervalId);
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(this.classList.contains('reset')) {
        chronometer.currentTime = 0;
        clearSplits();
    } else {
        printSplit();
    }
});
