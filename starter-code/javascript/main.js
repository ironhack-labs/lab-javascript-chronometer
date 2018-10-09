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

function updateClockDisplay() {
    var minD = chronometer.minutes.substr(0,1);
    var minU = chronometer.minutes.substr(1,1);
    var secD = chronometer.seconds.substr(0,1);
    var secU = chronometer.seconds.substr(1,1);
    minDec.innerHTML = minD;
    minUni.innerHTML = minU;
    secDec.innerHTML = secD;
    secUni.innerHTML = secU;
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
var winTimer = -1;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML==="START"){
btnLeft.innerHTML = "STOP";
chronometer.startClick();

}
else if (btnLeft.innerHTML === "STOP"){
btnLeft.innerHTML = "START";
chronometer.stopClick();
winTimer = window.setInterval(updateClockDisplay,500);
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.innerHTML==="SPLIT"){
        btnLeft.innerHTML = "RESET";
        chronometer.resetClick();
        }

        else if (btnLeft.innerHTML === "RESET"){
        btnLeft.innerHTML = "SPLIT";
        }
});
