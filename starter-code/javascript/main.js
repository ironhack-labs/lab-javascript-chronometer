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
}

function printMinutes() {
    var minutes = chronometer.setTime()[1].toString();
    var units = minutes[1];
    var decs = minutes[0];
    minDec.textContent = decs;
    minUni.textContent = units;
}

function printSeconds() {
    var seconds = chronometer.setTime()[0].toString();
    var units = seconds[1];
    var decs = seconds[0];
    secDec.textContent = decs;
    secUni.textContent = units;

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
        chronometer.stopClick();
    }
    else{
        setInterval(function() {
            printTime();
        }, 1000); 
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
