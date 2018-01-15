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

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains('start')){
    btnLeft.classList.replace('start', 'stop');
    btnLeft.innerHTML = 'STOP';
    btnRight.classList.replace('reset', 'split');
    btnRight.innerHTML = 'SPLIT';
    chronometer.startClick();
  }
  else {
    btnLeft.classList.replace('stop', 'start');
    btnLeft.innerHTML = 'START';
    btnRight.classList.replace('split', 'reset');
    btnRight.innerHTML = 'RESET';
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});