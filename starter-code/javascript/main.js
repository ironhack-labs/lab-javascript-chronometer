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
    minDec.innerHTML = minutes[0];
	minUni.innerHTML = minutes[1];
}

function printSeconds() {
    chronometer.setTime();
    secDec.innerHTML = seconds[0];
	secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute("class", "btn split");
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute("class", "btn start");
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute("class", "btn reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if(btnLeft.innerHTML === "START"){
        setStopBtn();
        chronometer.startClick();
    }else if(btnLeft.innerHTML === "STOP"){
        setStartBtn();
    }
    printMinutes();
    

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML === "RESET"){
        setSplitBtn();
    }else if(btnRight.innerHTML === "SPLIT"){
        setResetBtn();
    }
});
