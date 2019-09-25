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
  document.getElementById("btnLeft").innerHTML = "STOP";
  btnLeft.classList.toggle("stop")
}

function setSplitBtn() {
  document.getElementById("btnRight").innerHTML = "SPLIT";
  btnRight.classList.toggle("split")
}

function setStartBtn() {
  document.getElementById("btnLeft").innerHTML = "START";
  btnLeft.classList.toggle("start")
}

function setResetBtn() {
  document.getElementById("btnRight").innerHTML = "RESET";
  btnRight.classList.toggle("reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
  //btnLeft.parentNode.querySelector(".start")
  if(chronometer.currentTime === 0){
    setStartBtn();
    setResetBtn()
  }
  setStopBtn();
  setSplitBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(chronometer.currentTime !== 0){
    //setSplitBtn();
  }
  //setResetBtn()
});
