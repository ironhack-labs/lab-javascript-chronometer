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
    
    if (btnLeft.innerHTML==="START"){
        btnLeft.innerHTML = "STOP";
        btnRight.innerHTML = "SPLIT";
        btnLeft.classList.replace ("start","stop")
        btnRight.classList.replace ("reset","split")
        Chronometer.prototype.startClick ();
        Chronometer.prototype.setTime();
        
        
    }else{
        btnLeft.innerHTML = "START";
        btnRight.innerHTML = "RESET";
        btnLeft.classList.replace ("stop","start")
        btnRight.classList.replace ("split","reset")
        Chronometer.prototype.stopClick ();
    }
        
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML==="RESET"){
        btnRight.innerHTML = "SPLIT";
        btnRight.classList.replace ("reset","split")    
    }else{
        btnRight.innerHTML = "RESET";
        btnRight.classList.replace ("split","reset")
    }
        
});
