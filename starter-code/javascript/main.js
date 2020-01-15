var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitOL     = document.getElementById('splits');

function printTime(timeObj) {
  printMinutes(timeObj.min);
  printSeconds(timeObj.sec);
  printMilliseconds(timeObj.milli);
}

function printMinutes(minString) {
  minDec.innerHTML = minString[0];
  minUni.innerHTML = minString[1];
}

function printSeconds(secString) {
  secDec.innerHTML = secString[0];
  secUni.innerHTML = secString[1];
}

function printMilliseconds(milliString) {
  milDec.innerHTML = milliString[0];
  milUni.innerHTML = milliString[1];
}

function printSplit() {
  let li = document.createElement('li');
  li.innerHTML = chronometer.fullTime();
  splitOL.appendChild(li);
}

function clearSplits() {
  splitOL.innerHTML = "";
}

function resetChrono() {
  chronometer.resetClick();
  printTime({
    min:'00',
    sec:'00',
    milli:'00'
  })
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
  if ( chronometer.isRunning() ) {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  } else {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function (e) {
  if ( btnRight.classList.contains("reset") ) {
    resetChrono();
    clearSplits();
  } else {
    printSplit();
  }
});
