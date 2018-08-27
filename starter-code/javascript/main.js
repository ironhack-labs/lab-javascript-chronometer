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
  printSeconds()
}

function printMinutes() {
  var num1=chronometer.minutes
  var num2=chronometer.minutes

  minUni.innerHTML = num1
  minDec.innerHTML = num2

}

function printSeconds() {
  var num1=chronometer.seconds
  var num2=chronometer.seconds

  secUni.innerHTML = num1
  secDec.innerHTML = num2
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
  chronometer.startClick()
  btnLeft.innerHTML = "STOP"
  btnLeft.classList.add("stop")
  btnLeft.classList.add("start")
}

function setResetBtn() {
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  setStartBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
