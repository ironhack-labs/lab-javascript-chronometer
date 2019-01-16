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

function printMinutes(minutes) {
  
  minDec.innerHTML = this.minutes[0];
  minDec.innerHTML = this.minutes[1];

}

function printSeconds() {
  minDec.innerHTML = chronometer.setSeconds();
  
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
  
  if(btnLeft.classList.toggle("stop")){
    btnLeft.innerHTML = "STOP";
    chronometer.stopClick();
  }  else{
    btnLeft.innerHTML = "START";
    chronometer.startClick();
  }
  
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.classList.toggle("split")){
    btnRight.innerHTML = "SPLIT";
  }
  else{
    btnRight.innerHTML = "RESET";
  }
});
