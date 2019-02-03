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
    chronometer.setMinutes();
    minDec.innerHTML = chronometer.minutes[0]
    minUni.innerHTML = chronometer.minutes[1]
}

function printSeconds() {
    chronometer.setSeconds();
    secDec.innerHTML = chronometer.seconds[0]
    secUni.innerHTML = chronometer.seconds[1]
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
    console.log("SI funciono")
    chronometer.startClick()
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
