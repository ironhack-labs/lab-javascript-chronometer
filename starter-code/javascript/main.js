var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var newChronometer = new Chronometer();

function printTime() {

}

function printMinutes() {
// this.getMinutes();
minDec.innerHTML = this.minutes;
}

function printSeconds() {
secDec.innerHTML = this.minutesRemoved;
}

function printMilliseconds() {

}

function printSplit() {

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
if ((minDec.innerHTML === "0") && (minUni.innerHTML === "0") && (secDec.innerHTML === "0") && (secUni.innerHTML === "0")) {
    btnLeft.innerHTML = "STOP";
    let btnStart = document.getElementsByClassName('btn start');
    btnLeft.setAttribute('class', 'btn stop');
    new Chronometer().stopClick();
    // this.stopClick();
    btnRight.innerHtml = "SPLIT";
    let btnReset = document.getElementsByClassName('btn reset');
    btnRight.setAttribute('class', 'btn split');
} 
else if ((minDec.innerHTML ==! "0") || (minUni.innerHTML ==! "0") || (secDec.innerHTML ==! "0") || (secUni.innerHTML ==! "0")){
    btnLeft.innerHTML = "START";
    let btnStop = document.getElementsByClassName('btn stop');
    btnLeft.setAttribute('class', 'btn start');
    new Chronometer().startClick();
    // Chronometer.call(this, startClick());
    // this.startClick();
    btnRight.innerHtml = "RESET";
    let btnSplit = document.getElementsByClassName('btn split');
    btnRight.setAttribute('class', 'btn reset');
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
