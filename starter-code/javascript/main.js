// var imported = document.createElement('script');
// imported.src = './chronometer.js';
// document.head.appendChild(imported);

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes,seconds) {
  printMinutes(minutes)
  printSeconds(seconds)
}

function printMinutes(minutes) {
  var minD = minutes.substr(0,1);
  var minU = minutes.substr(1,1);
  minDec.innerHTML = minD
  minUni.innerHTML = minU
}

function printSeconds(seconds) {
  var secD = seconds.substr(0,1);
  var secU = seconds.substr(1,1);
  secDec.innerHTML = secD
  secUni.innerHTML = secU
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
  //Start clicked
  if(btnLeft.innerHTML === "START"){
    btnLeft.innerHTML = "STOP"
    btnLeft.className = "btn stop"
    chronometer.startClick()
  } else //Stop clicked
  {
    btnLeft.innerHTML = "START"
    btnLeft.className = "btn start"
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  //Reset clicked
  if(btnRight.innerHTML === "RESET"){
    btnRight.innerHTML = "SPLIT"
    btnRight.className = "btn split"
  } else //Split clicked
  {
    btnRight.innerHTML = "RESET"
    btnRight.className = "btn reset"
  }
});
