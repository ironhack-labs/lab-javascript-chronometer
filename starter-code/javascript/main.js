var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes,seconds) {
    printMinutes(minutes);
    printSeconds(seconds);
}

function printMinutes(minutes) {
    minDec.innerHTML=minutes[0];
    minUni.innerHTML=minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML=seconds[0];
    secUni.innerHTML=seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.setAttribute("class","btn stop");
    btnLeft.innerHTML="STOP";

}

function setSplitBtn() {
    btnRight.setAttribute("class","btn split");
    btnRight.innerHTML="SPLIT";

}

function setStartBtn() {
    btnLeft.setAttribute("class","btn start");
    btnLeft.innerHTML="START";
}

function setResetBtn() {
    btnRight.setAttribute("class","btn reset");
    btnRight.innerHTML="RESET";
}
var domInterval;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.getAttribute("class")==="btn start"){
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
    }else{
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.getAttribute("class")==="btn reset"){
        setStopBtn();
        setSplitBtn();
    }else{
        setStartBtn();
        setResetBtn();
    }
});
