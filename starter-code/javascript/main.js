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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes()); 
  minUni.innerHTML = minutes[1];
  minDec.innerHTML = minutes[0];
}

function printSeconds() {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds()); 
  secUni.innerHTML = seconds[1];
  secDec.innerHTML = seconds[0];
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
  var status = btnLeft.getAttribute("class");
  if (status === 'btn start') {
    chronometer.startClick(); 
    btnLeft.setAttribute("class", 'btn stop');
    btnLeft.innerHTML = "STOP";
    btnRight.setAttribute("class", 'btn split');
    btnRight.innerHTML = "SPLIT";
    interval = setInterval(() => {
      printTime();
    },1000);
  } else {
    chronometer.stopClick();
    btnLeft.setAttribute("class", 'btn start');
    btnLeft.innerHTML = "START";
    btnRight.setAttribute("class", 'btn reset');
    btnRight.innerHTML = "RESET";
    clearInterval(interval);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
