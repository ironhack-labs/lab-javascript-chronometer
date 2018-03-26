var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var timeToPrint     = chronometer.setTime();

/* NOT WORKING ----- GRRRR --------

function printTime() {
  minDec = this.timeToPrint[0];
  minUni = this.timeToPrint[1];
  secDec = this.timeToPrint[5];
  secUni = this.timeToPrint[6];
}

*/

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
  
  if (document.getElementById("btnLeft").classList.contains("start")) {
    document.getElementById("btnLeft").classList.replace("start", "stop");
    chronometer.startClick();
  } else {
    document.getElementById("btnLeft").classList = "btn start";
    chronometer.stopClick();
  }

  if (document.getElementById("btnLeft").innerText === "START") {
    document.getElementById("btnLeft").innerText = "STOP";
  } else {
    document.getElementById("btnLeft").innerText = "START";
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  
  if (document.getElementById("btnRight").classList.contains("reset")) {
    document.getElementById("btnRight").classList.replace("reset", "split");
  } else {
    document.getElementById("btnRight").classList = "btn reset";
  }

  if (document.getElementById("btnRight").innerText === "RESET") {
    document.getElementById("btnRight").innerText = "SPLIT";
  } else {
    document.getElementById("btnRight").innerText = "RESET";
  }

});
