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
    var time = chronometer.setTime();
    printSeconds(time);
    printMinutes(time);
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

function printMilliseconds() {
}

function printSplit() {
}

function clearSplits() {
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
    
function work(){
    return btnLeft.innerHTML == "STOP";

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(work()){
        clearInterval(intervalId);
        chronometer.stopClick();
    } else {
        chronometer.startClick();
        intervalId = setInterval(printTime,10);
            }
        changeBtnStyle();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
