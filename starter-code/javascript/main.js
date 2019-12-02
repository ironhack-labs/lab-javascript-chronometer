var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');


function printTime() {
  setInterval( function(){
    printMinutes()
    printSeconds()
  }, 1000)
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerHTML = minutes[1];
  minDec.innerHTML = minutes[0];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerHTML = seconds[1];
  secDec.innerHTML = seconds[0];
}

function printMilliseconds() {

}

function printSplit() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let splitedTime = chronometer.splitClick(minutes, seconds);
  splits.innerHTML // Aquí me quedo...
}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.classList = "btn start";
  btnLeft.innerHTML = "START";
  chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.classList = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList = "btn stop";
  btnLeft.innerHTML = "STOP";
  chronometer.startClick();
}

function setResetBtn() {
  btnRight.classList = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList == "btn start"){
    setStartBtn();
    setSplitBtn()
    printTime()
  } else if (btnLeft.classList == "btn stop") {
    setStopBtn();
    setResetBtn()
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList == "btn reset"){
    setSplitBtn()
  } 
});
