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
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes() {
  minDec.innerHTML = minutes(0);
  minUni.innerHTML = minutes(1);
}

function printSeconds() {
  secDec.innerHTML = seconds(0);
  secUni.innerHTML = seconds(1);
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
  if(btnLeft.innerHTML == "START"){
    chronometer.startClick();
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerText = "STOP";
    btnRight.setAttribute("class", "btn split");
    btnRight.innerText = "SPLIT";
  } else {
    chronometer.stopClick();
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerText = "START";
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerText = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
