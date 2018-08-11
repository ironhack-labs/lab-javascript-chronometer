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
    console.log(chronometer.currentTime); 
    printMinutes();
    printSeconds();

}

function printMinutes() {
    var minutos = chronometer.setMinutes();
    if(minutos < 10) {
        minUni.innerHTML = minutos;
    }
}

function printSeconds() {
    var segundos = chronometer.setSeconds();
    if(segundos < 10) {
        secUni.innerHTML = segundos;
    }
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
    
    if(btnLeft.className == 'btn stop') {
        btnLeft.innerHTML = 'START';
        btnLeft.className = 'btn start';
        btnRight.innerHTML = 'RESET';
        btnRight.className = 'btn reset';
        chronometer.stopClick();
    } else {
        btnLeft.innerHTML = 'STOP';
        btnLeft.className = 'btn stop'
        btnRight.innerHTML = 'SPLIT';
        btnRight.className = 'btn split';
        chronometer.startClick();
    }
    printTime();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
    

});
