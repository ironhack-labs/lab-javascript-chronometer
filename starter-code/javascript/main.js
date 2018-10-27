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
  var time = chronometer.setTime();
  printMinutes(time[0]);
  printSeconds(time[1]);
}

function printMinutes(minutes) {
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];
}

function printSeconds(seconds) {
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];

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
    // var leftButton = document.getElementById('btnLeft');

    if(btnLeft.innerText === 'STOP') {
        btnLeft.innerText = 'START'
        btnLeft.className = 'btn start'
    } else {
        btnLeft.innerText = 'STOP';
        btnLeft.className = 'btn stop'
        chronometer.startClick();
        setInterval (function() {
          printTime()
        },500);  
    }    
}
);

// Reset/Split Button
btnRight.addEventListener('click', function () {

});