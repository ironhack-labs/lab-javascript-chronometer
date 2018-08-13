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
    minUni.innerHTML = chronometer.minutes[1]
    minDec.innerHTML = chronometer.minutes[0]   
}

function printSeconds() {
    secUni.innerHTML = chronometer.seconds[1]
    secDec.innerHTML = chronometer.seconds[0]
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick();   
}

function setResetBtn() {
    
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className == "btn start"){
        btnLeft.className = "btn stop"
        btnLeft.innerHTML = "STOP"   
        btnRight.className ="btn split"
        btnRight.innerHTML = "SPLIT"
        setStartBtn();
    } else {
        btnLeft.className = "btn start"
        btnLeft.innerHTML = "START"   
        btnRight.className ="btn reset"
        btnRight.innerHTML = "RESET"          
        setStopBtn();    
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});