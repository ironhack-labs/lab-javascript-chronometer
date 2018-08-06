var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


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
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");

}

function setSplitBtn() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");

}

function setResetBtn() {

  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  // during running state, change text to STOP
  //during stopped state, change text to START

  if (btnLeft.innerHTML === "STOP") {
    setStopBtn();
    btnLeft.innerHTML = "START";
    chronometer.startClick();
  } else {
    setStartBtn();
    btnLeft.innerHTML = "STOP";
    chronometer.stopClick();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  //if button is clicked, change text to SPLIT
  if (btnRight.innerHTML === "SPLIT") {
    setSplitBtn();
    btnRight.innerHTML = "RESET"
  } else {
    setResetBtn();
    btnRight.innerHTML = "SPLIT"
  }

});


var chronometer = new Chronometer();
