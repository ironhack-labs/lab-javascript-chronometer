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
	chronometer.setTime();
	minDec.innerHTML = minutos[0];
	minUni.innerHTML = minutos[1];
}

function printSeconds() {
	chronometer.setTime();
	secDec.innerHTML = segundos[0];
	secUni.innerHTML = segundos[1];
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

    if (btnLeft.innerHTML === "START"){
        chronometer.startClick();
        btnLeft.innerHTML = "STOP";
        btnLeft.setAttribute("class","btn stop");        
    } else {
    	chronometer.stopClick();
        btnLeft.innerHTML = "START";
        btnLeft.setAttribute("class","btn start");        
    }   

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
	if (btnRight.innerHTML === "RESET"){
        chronometer.resetClick();
        btnRight.innerHTML = "SPLIT";
        btnRight.setAttribute("class","btn split");
    } else {    	
        btnRight.innerHTML = "RESET";
        btnRight.setAttribute("class","btn reset");
    }   

});
