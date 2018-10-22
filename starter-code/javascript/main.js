var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits')


function printTime() {
    
}

function printMinutes() {
    minDec.innerHTML = chronometer.time.min;
}

function printSeconds() {
    secDec.innerHTML = chronometer.time.sec;
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.time.ms;
}

function printSplit() {
    let split = document.createElement('li');
    split.innerHTML = chronometer.time.min + " : " + chronometer.time.sec 
    splits.appendChild(split)
}

function clearSplits() {
    // let split = document.getElementsByTagName('li');
    while (splits.firstChild) {
        splits.removeChild(splits.firstChild);
    }
}

function setStopBtn() {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";

}

function setResetBtn() {
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(chronometer.isOn){
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    } else {
        setStopBtn(); 
        setSplitBtn();
        chronometer.startClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(chronometer.isOn){
        chronometer.splitClick()
    } else {
    chronometer.resetClick();
    clearSplits();
    }
});
