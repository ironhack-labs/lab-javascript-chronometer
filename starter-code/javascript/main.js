var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

//var chrono2 = new Chronometer;

function printTime() {
  setInterval (function(){
    minDec.innerHTML = chronometer.setTime().minutes[0];
    minUni.innerHTML = chronometer.setTime().minutes[1];
    secDec.innerHTML = chronometer.setTime().seconds[0];
    secUni.innerHTML = chronometer.setTime().seconds[1];
  },1000)
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

  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP";
    btnLeft.className="btn stop";
    chronometer.startClick();
    printTime();
  } else {
    btnLeft.innerText = "START";
    btnLeft.className="btn start";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
 
  if (btnRight.innerText === "RESET" && btnLeft.innerText === "STOP") {
    btnRight.innerText = "SPLIT";
    btnRight.className ="btn split";
  } else {
    btnRight.innerText = "RESET";
    btnRight.className ="btn reset";
  }
});
