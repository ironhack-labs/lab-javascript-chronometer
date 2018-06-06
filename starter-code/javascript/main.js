var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var list        = document.getElementById('splits');

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

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
    chronometer.startClick();
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split"

  } else {
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
    chronometer.stopClick();
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset"
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if ((chronometer.currentTime > 0) && (btnLeft.innerHTML === "START")){
    chronometer.resetClick();
  }
  if (btnRight.innerHTML === "SPLIT"){
    var newItem = document.createElement("li");
    newItem.innerHTML = `${chronometer.minutes}:${chronometer.seconds}`;
    list.appendChild(newItem);
  }
});

setInterval(function(){
  minDec.innerHTML = chronometer.minutes[0];
  minUni.innerHTML = chronometer.minutes[1];
  secDec.innerHTML = chronometer.seconds[0];
  secUni.innerHTML = chronometer.seconds[1];
}, 500)
