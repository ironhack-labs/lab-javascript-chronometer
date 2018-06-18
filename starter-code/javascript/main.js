var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var splitContainer = document.getElementById("splits");


function printTime() {
    var time = chronometer.setTime();
    printSeconds(time);
    printMinutes(time);
    printMilliseconds(time);
}

function printMinutes(time) {
    var minutes = time.minutes;
    minUni.innerHTML = minutes[1];
    minDec.innerHTML = minutes[0];
}

function printSeconds(time) {
    var seconds = time.seconds;
    secUni.innerHTML = seconds[1];
    secDec.innerHTML = seconds[0];
}

function printMilliseconds(time) {
    var milSecs = time.milSecs;
    console.log(milSecs);
    milUni.innerHTML = milSecs[1];
    milDec.innerHTML = milSecs[0];
}

function printSplit() {
    var time = chronometer.setTime();
    var split = document.createElement("li");
    split.innerHTML = time.minutes + ":" + time.seconds + ":" + time.milSecs;

    splitContainer.appendChild(split);
}

function clearSplits() {
    splitContainer.innerHTML = "";
}

function setStopBtn() {
    btnLeft.className = "btn stop"
    btnLeft.innerHTML = "STOP"
}

function setSplitBtn() {
    btnRight.className = "btn split"
    btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
    btnLeft.className = "btn start"
    btnLeft.innerHTML = "START"
}

function setResetBtn() {
    btnRight.className = "btn reset"
    btnRight.innerHTML = "RESET"
}

function changeBtnStyle(){
    if(btnLeft.innerHTML == "START"){
        setStopBtn();
        setSplitBtn();
    } else {
        setStartBtn();
        setResetBtn();
    }
}

function isRunning(){
    return btnLeft.innerHTML == "STOP";
}

// Start/Stop Button
var intervalId;
btnLeft.addEventListener('click', function () {
    if(isRunning()){
        clearInterval(intervalId);
        chronometer.stopClick();
    } else {
        chronometer.startClick();
        intervalId = setInterval(printTime, 10);
    }
    changeBtnStyle();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(isRunning()){
        printSplit();    
    } else {
        clearSplits();
        chronometer.resetClick();
        printTime();
    }
});
