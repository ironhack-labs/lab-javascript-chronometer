var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

/*function updateClockDisplay() {
    var minD = chronometer.minutes.substr(0,1);
    var minU = chronometer.minutes.substr(1,1);
    var secD = chronometer.seconds.substr(0,1);
    var secU = chronometer.seconds.substr(1,1);
    minDec.innerHTML = minD;
    minUni.innerHTML = minU;
    secDec.innerHTML = secD;
    secUni.innerHTML = secU;
}*/

function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    var time = chronometer.setTime();
    minDec.innerHTML = time.substr(0,1);
    minUni.innerHTML = time.substr(1,1);
}

function printSeconds() {
    var time = chronometer.setTime();
    secDec.innerHTML = time.substr(2,1);
    secUni.innerHTML = time.substr(3,1);
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerHTML =  'STOP';
    btnLeft.className = 'btn stop';
}

function setSplitBtn() {
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
}

function setStartBtn() {
    btnLeft.innerHTML =  'START';
    btnLeft.className = 'btn start';
}

function setResetBtn() {
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
    if (btnLeft.className === 'btn start') {
        chronometer.startClick();
        setStopBtn();
    }
    else {
        chronometer.stopClick();
        setStartBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.className === 'btn reset') {
        chronometer.resetClick();
        setSplitBtn();
    }
    else {
        //chronometer.resetClick() TODO:
        setResetBtn();
    }
});

