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

function printMinutes(minutes) {
  minDec.innerHTML = minutes.charAt(0);
  minUni.innerHTML = minutes.charAt(1);
}

function printSeconds(seconds) {
  secDec.innerHTML = seconds.charAt(0);
  secUni.innerHTML = seconds.charAt(1);
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.className = btnLeft.className.replace(/start/, 'stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.className = btnRight.className.replace(/reset/, 'split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = btnLeft.className.replace(/stop/, 'start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.className = btnRight.className.replace(/split/, 'reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains('start')){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    intervalId = setInterval(() => {
      let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
      let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
      printTime(minutes, seconds);
    }, 10);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    clearInterval(intervalId);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
});