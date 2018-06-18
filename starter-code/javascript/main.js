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
    setInterval(function(){  

    },1000)

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
btnLeft.innerHTML = "START"
btnLeft.className = "btn start"
btnRight.innerHTML = "RESET"
btnRight.className = "btn reset"
}

function setSplitBtn() {

}

function setStartBtn() {
 btnLeft.innerHTML = "STOP"
 btnLeft.className = "btn stop"
 btnRight.innerHTML = "SPLIT"
 btnRight.className = "btn reset"
}

function setResetBtn() {

}

 //Start/Stop Button
btnLeft.addEventListener('click', function () {
if (btnLeft.innerHTML == "START"){
    chronometer.startClick()
    setStartBtn()
    printTime()
} else {
    chronometer.stopClick()
    setStopBtn()
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
