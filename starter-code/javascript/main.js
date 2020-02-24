var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

let chrono = new Chronometer (); 
function printTime() {

}

function printMinutes() {
    document.querySelector('#minDec').innerText = getMinutes()
}

function printSeconds() {
    document.querySelector('#minUni').innerText = getSeconds()

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
if (btnLeft.className === 'btn start') {
btnLeft.innerHTML = "STOP"
btnLeft.onclick = chrono.startClick;
btnLeft.setAttribute('class', '. btn stop')
btnRight.innerHTML = "SPLIT";
btnRight.setAttribute('class', 'btn split')
} else {
btnLeft.innerHTML = "START"
btnLeft.setAttribute('class', '. btn start')
btnLeft.onclick = chrono.stopClick;
btnRight.innerHTML = "RESET";
btnRight.setAttribute('class', 'btn reset')
}
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
    
});
