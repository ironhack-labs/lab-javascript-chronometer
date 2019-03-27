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
  btnLeft.classList.replace('start', 'stop');
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.replace('reset', 'split');
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.replace('stop', 'start');
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.replace('split', 'reset');
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === 'btn start') {
    setStopBtn();
  } else {
    setStartBtn();
  };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === 'btn reset') {
    setSplitBtn();
  } else {
    setResetBtn();
  };
});