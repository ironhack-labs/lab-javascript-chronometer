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
}

function printMinutes() {

}

function printSeconds() {
  var seconds = chronometer.setTime().seconds;
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
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
  chronometer.startClick();
  setInterval(printTime, 1000);
  // printTime();
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
