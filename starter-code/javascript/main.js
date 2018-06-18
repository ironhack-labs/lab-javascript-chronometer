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

function printMinutes(minutes) {
  var min = minutes.split('');
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds(seconds) {
  var sec = seconds.split('');
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function updateBtn(btn, text, btnClass) {
  btn.innerHTML = text;
  btn.setAttribute('class', btnClass);
}

function setStopBtn() {
  updateBtn(btnLeft, 'STOP', 'btn stop');
}

function setSplitBtn() {
  updateBtn(btnRight, 'SPLIT', 'btn split');
}

function setStartBtn() {
  updateBtn(btnLeft, 'START', 'btn start');
}

function setResetBtn() {
  updateBtn(btnRight, 'RESET', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.getAttribute('class').indexOf('start') !== -1) {
    setStopBtn();
    setSplitBtn();

    chronometer.startClick();
  } else {
    setStartBtn();
    setResetBtn();

    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  
});
