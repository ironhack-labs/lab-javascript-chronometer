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
minDec.innerHTML= minutes[0];
minUni.innerHTML= minutes[1];
}

function printSeconds() {
chronometer.setTime();
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

}

function setSplitBtn() {
    botonizquiero.onclick = (()=>{
        botonizquiero.setAttribute('button','STOP');
       });
}

function setStartBtn() {
    
}   
function setResetBtn() {

}

// Start/Stop Button
 var botonizquiero = btnLeft.addEventListener('click', function () {
       chronometer.startClick();
     
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
        chronometer.resetClick();
});
