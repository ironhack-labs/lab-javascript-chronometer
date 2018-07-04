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
  var leftBtn = event.currentTarget;
  
  leftBtn.classList.toggle("start");
  leftBtn.classList.toggle("stop");
  
  if (leftBtn.classList.contains("start")) {
    leftBtn.innerText = "START"
  } else {
    leftBtn.innerText = "STOP"
  };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});






