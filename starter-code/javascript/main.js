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
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.setMinutes).substring(chronometer.setMinutes.length - 2, chronometer.setMinutes.length);
  //minUni.textContent=chronometer.setMinutes;
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
  btnLeft.className = 'btn start';
  btnLeft.textContent = 'START';
}

function setSplitBtn() {
  btnRight.className = 'btn reset';
  btnRight.textContent = 'RESET';
}

function setStartBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.textContent = 'STOP';
}

function setResetBtn() {
  btnRight.className = 'btn split';
  btnRight.title = 'SPLIT';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === 'btn start') {
    setStartBtn();
    chronometer.startClick();
    printTime();
  } else {
    setStopBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === 'btn reset') {
    setResetBtn();
    chronometer.resetClick;

  } else {
    setSplitBtn();
    chronometer.splitClick;
  }
});