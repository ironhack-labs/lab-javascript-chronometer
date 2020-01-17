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
    printMinutes(chronometer.twoDigitsNumber(chronometer.getMinutes()));
    printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds()));
}

function printMinutes() {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    secUni.innerHTML = seconds[0];
    secDec.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    document.getElementById("btnLeft") = this.stopClick();
}

function setSplitBtn() {
    this.splitClick();
}

function setStartBtn() {
    this.startClick();
}

function setResetBtn() {
    this.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    chronometer.startClick();
    if (btnLeft.innerHTML === "START") {
        chronometer.resetClick();
        btnLeft.innerHTML = "STOP";
        btnLeft.setAttribute("class", "btn stop");
        btnRight.setAttribute("class", "btn reset");
        btnRight.innerHTML = "RESET";
        chronometer.startClick();
    } else {
        btnLeft.innerHTML = "START";
        chronometer.stopClick();
        btnLeft.setAttribute("class", "btn start");
        btnRight.setAttribute("class", "btn split");
        btnRight.innerHTML = "SPLIT";
    }
 
});

setInterval( () => {
    printTime();
 }, 1000);

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
