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
setTimeout();
}

function printMinutes() {
minDec.innerHTML = chronometer.setTime[0];
minUni.innerHTML = chronometer.setTime[1];
}

function printSeconds() {
secDec.innerHTML = chronometer.setTime[2];
secUni.innerHTML = chronometer.setTime[3];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerHTML="SPLIT"
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML="START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}
function setMinSec() {
  minSec.innerHTML = chronometer.setTime()
}
// Start/Stop Button
btnLeft.addEventListener('click', function () {
  
  if (chronometer.currentTime === 0){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printMinutes();
    printSeconds();
    
  }
  else{
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (chronometer.currentTime != 0){
    setResetBtn();
    chronometer.resetClick();
    
  }
  else{
    setSplitBtn();
  }
});

