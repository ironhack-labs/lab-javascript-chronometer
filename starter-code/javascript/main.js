var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {
    printMinutes()
    printSeconds()

}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerText = minutes[0]
    minUni.innerText = minutes[1]
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerText = seconds[0]
    secUni.innerText = seconds[1]

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

    if (btnLeft.innerText == "START") {
        btnLeft.innerText = "STOP"
        btnRight.innerText = "SPLIT"
       
       chronometer.startClick(printTime)
        
    } else { 
        btnLeft.innerText = "START"
        btnRight.innerText = "RESET"
        btnRight.style.background = "blue"
        chronometer.stopClick()
}
});


// Reset/Split Button
btnRight.addEventListener('click', function () {

});
