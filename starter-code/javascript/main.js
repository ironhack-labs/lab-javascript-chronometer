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
  minUni.innerHTML = chronometer.setMinutes()
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
    if (btnLeft.classList.contains("start")){
      btnLeft.setAttribute("class", "btn stop")
      btnLeft.innerHTML = "STOP";
      chronometer.startClick()
    } else {
      btnLeft.setAttribute("class", "btn start")
      btnLeft.innerHTML = "START"
      chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains("reset")){
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT"
  } else {
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerHTML = "RESET"
  }
});
