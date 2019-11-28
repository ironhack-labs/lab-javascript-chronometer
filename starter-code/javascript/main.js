var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

btnLeft.onclick = function() {
  if ( btnLeft.className == 'btn start') {
    btnLeft.className = 'btn stop';
    btnLeft.innerText = 'STOP';
    btnRight.className = 'btn split';
    btnRight.innerHTML = 'SPLIT';
    chronometer.startClick()
  } else if (btnLeft.className == 'btn stop') {
    btnLeft.className = 'btn start';
    btnLeft.innerText = 'START';
    btnRight.className = 'btn reset';
    btnRight.innerHTML = 'RESET';
    chronometer.stopClick();
  }
}

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

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
