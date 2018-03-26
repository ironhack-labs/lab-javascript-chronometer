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

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStartBtn() {
    var btnStop = document.getElementById("btnLeft");
    btnStop.setAttribute("class","btn start");
    btnStop.textContent = "START";
}

function setSplitBtn() {
    var btnReset = document.getElementById("btnRight");
    btnReset.setAttribute("class","btn split");
    btnReset.textContent = "SPLIT";
}

function setStopBtn() {
    var btnStart = document.getElementById("btnLeft");
    btnStart.setAttribute("class","btn stop");
    btnStart.textContent = "STOP";
}

function setResetBtn() {
    var btnReset = document.getElementById("btnRight");
    btnReset.setAttribute("class","btn reset");
    btnReset.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    if(this.className == "btn stop"){
        setStartBtn();
        setResetBtn();
    }
    else{
        setStopBtn();
        setSplitBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
