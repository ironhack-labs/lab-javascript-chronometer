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
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.milliseconds[0];
    milUni.innerHTML = chronometer.milliseconds[1];
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "Stop";
}

function setSplitBtn() {
    btnRight.className = "btn split";
    btnRight.innerHTML = "Split"
}

function setStartBtn() {
 btnLeft.className = "btn start";
 btnLeft.innerHTML = "Start"
}

function setResetBtn() {
btnRight.className = "btn reset";
btnRight.innerHTML = "Reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className === "btn start"){
        chronometer.startClick()
        setStopBtn();
        setSplitBtn();
    }else {
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className === "btn reset"){
        chronometer.resetClick();
        minDec.innerHTML = "0";
        minUni.innerHTML = "0";
        secDec.innerHTML = "0";
        secUni.innerHTML = "0";
        milDec.innerHTML = "0";
        milUni.innerHTML = "0";
    }else{
        console.log("aqui va el split")
    }
});
