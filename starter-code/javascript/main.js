var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitOl     = document.getElementById('splits');

function printTime(timeObj) {
  console.log(timeObj, timeObj.min, timeObj.sec);
  printMinutes(timeObj.min);
  printSeconds(timeObj.sec);
}

function printMinutes(minString) {
  minDec.innerHTML = minString.split("")[0];
  minUni.innerHTML = minString.split("")[1];
}

function printSeconds(secString) {
  secDec.innerHTML = secString.split("")[0];
  secUni.innerHTML = secString.split("")[1];
}

function printMilliseconds() {

}

function printSplit() {
  let li = document.createElement('li');
  li.innerHTML = chronometer.fullTime();
  splitOl.appendChild(li);
}

function clearSplits() {
  splitOl.innerHTML = "";
}

function resetChrono() {
  chronometer.resetClick();
  printTime({
    min:'00',
    sec:'00'
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
  let el = e.target;

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
  let target = e.target;
  if ( btnRight.classList.contains("reset") ) {
    resetChrono();
    clearSplits();
  } else {
    printSplit();
  }
});
