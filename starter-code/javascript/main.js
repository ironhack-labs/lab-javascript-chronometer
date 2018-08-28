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
    document.getElementById('btnLeft').innerHTML = "STOP";
}

function setSplitBtn() {
    document.getElementById('btnRight').innerHTML = 'SPLIT';
}

function setStartBtn() {
    document.getElementById('btnLeft').innerHTML = "START";
}

function setResetBtn() {
    document.getElementById('btnRight').innerHTML = 'RESET';
}
var newChrono = new Chronometer();
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(document.getElementById('btnLeft').innerHTML === "START"){
        setStopBtn();
    }else{
        setStartBtn();
        newChrono.startClick();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(document.getElementById('btnRight').innerHTML === "RESET"){
        setSplitBtn();
    }else{
        setResetBtn();
        newChrono.stopClick();
    }
});
