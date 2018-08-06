var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

function printTime(minutes, seconds) {
    printMinutes(minutes);
    printSeconds(seconds);
}

function printMinutes(minutes) {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {
    document.getElementById('list').innerHTML += '<li>' + chronometer.splitClick() + '</li>';
}

function setStartBtn() {
    chronometer.startClick();
}

function setResetBtn() {
    document.getElementById('list').innerHTML = '';
    chronometer.currentTime = 0;
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    console.log(this.classList);
    var rightButton = document.querySelector('#btnRight');
    if (this.classList.contains('start')) {
        this.classList.remove('start');
        this.classList.add('stop');

        rightButton.classList.add('split');
        rightButton.classList.remove('reset');

        this.innerHTML = 'STOP';
        rightButton.innerHTML = 'SPLIT';
        setStartBtn();
    } else {
        this.classList.add('start');
        this.classList.remove('stop');
        rightButton.classList.add('reset');
        rightButton.classList.remove('split');
        this.innerHTML = 'START';
        rightButton.innerHTML = 'RESET';
        setStopBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (this.classList.contains('split')) {
        setSplitBtn();
    } else {
        setResetBtn();
    }
});
