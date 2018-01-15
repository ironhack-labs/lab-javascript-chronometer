var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes, seconds) {
minUni.innerHTML = minutes[0];
minUni.innerHTML = minutes[1];
minDec.innerHTML = seconds[0];
minDec.innerHTML = seconds[1];
}

function printMinutes() {
return chronometer.setTime.minutes
}

function printSeconds() {
  return chronometer.setTime.seconds
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
  if (btnLeft.className=="btn start"){
    chronometer.startClick()
  }
  else if (btnLeft.className=="btn stop"){
    chronometer.stopClick()
  }
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  console.log("btnLeft click")
  if (chronometer.intervalId===0) {
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
    chronometer.startClick();
  }
  else {
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
