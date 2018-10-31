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
  printMilliseconds();
}

function printMinutes() {
  var minutes = chronometer.setMinutes();
  var arrMin = chronometer.twoDigitsNumber(minutes).split('');
  minDec.innerText = String(arrMin[0]);
  minUni.innerText = String(arrMin[1]);
}

function printSeconds() {
  var seconds = chronometer.setSeconds();
  var arrSec = chronometer.twoDigitsNumber(seconds).split('');
  secDec.innerText = String(arrSec[0]);
  secUni.innerText = String(arrSec[1]);
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
  if(btnLeft.classList.contains('start')) {
    printTime();
    chronometer.startClick();
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    btnLeft.classList.remove('start');
    btnLeft.classList.add('btn');
    btnLeft.classList.add('stop');
    btnRight.classList.remove('reset');
    btnRight.classList.add('btn');
    btnRight.classList.add('split');
  } else if (btnLeft.classList.contains('stop')) {
    chronometer.stopClick();
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('btn');
    btnLeft.classList.add('start');
    btnRight.classList.remove('split')
    btnRight.classList.add('btn');
    btnRight.classList.add('reset');
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function ()  {

});
