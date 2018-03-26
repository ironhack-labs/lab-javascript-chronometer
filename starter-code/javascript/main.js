var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft'); //usado
var btnRight    = document.getElementById('btnRight'); //usado
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    setInterval(function(){
        printMinutes();
        printSeconds();

    }, 1000)
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];

}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];

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


if (btnLeft.className == "btn start") {
    btnLeft.textContent ="STOP";
    btnLeft.setAttribute("class", "btn stop");

    btnRight.textContent = "SPLIT";
    btnRight.setAttribute("class", "btn split");
    printTime();

}
else {
    btnLeft.textContent ="START";
    btnLeft.setAttribute("class", "btn start");

    btnRight.textContent = "RESET";
    btnRight.setAttribute("class", "btn reset");

}

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
});

if (btnLeft.className == "btn start") {
    chronometer.startClick();
}
else {
    chronometer.stopClick();

}