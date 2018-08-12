var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var chronometer = new Chronometer()

btnLeft.addEventListener('click', function(){
  chronometer.startClick()
})

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  var minutes = Math.floor(chronometer.currentTime / 60);
  var decMin = 0;
  var uniMin = 0;
  var minutesString = minutes.toString()
  uniMin = minutesString[1]
  if(minutesString.length === 1) uniMin = minutesString

  minUni.innerHTML = uni = minutesString
}

function printSeconds() {
  var seconds = chronometer.currentTime % 60;
  var dec = 0;
  var uni = 0;

  var secondString = seconds.toString()
  uni = secondString[1]
  if(secondString.length === 1) uni = secondString
  
  secUni.innerHTML = uni

  dec = secondString[0]
  if (secondString.length === 1) dec = 0

  secDec.innerHTML = dec
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

/* // Start/Stop Button
btnLeft.addEventListener('click', function () {

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
 */