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

}

function printMinutes() {
    this.setMinutes();
}

function printSeconds() {
    this.setSeconds();
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
var stopped = true;
var reset = true;

btnLeft.addEventListener('click', function () {
    if(stopped === true){
        btnLeft.classList.add("stop");
        stopped = false;
        btnLeft.innerHTML = 'STOP';
        btnRight.classList.add("split");
        reset = false;
        btnRight.innerHTML = 'SPLIT';
    }else{
        btnLeft.classList.remove("stop");
        stopped = true;
        btnLeft.innerHTML = "START";
        btnRight.classList.remove("reset");
        reset = true;
        btnRight.innerHTML = 'RESET';
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

})