var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splLst      = document.getElementById('splits');


function printTime() {
  setInterval(function () {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 1);
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes()).slice(0, 1);
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes()).slice(1, 2);
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds()).slice(0, 1);
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds()).slice(1, 2);
}

function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setMilliseconds()).slice(-2, -1);
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setMilliseconds()).slice(-1);
}

function printSplit() {
  var split = document.createElement('li');
  split.appendChild(document.createTextNode(chronometer.setTime()));
  splLst.appendChild(split);
}

function clearSplits() {
  while (splLst.firstChild) { splLst.removeChild(splLst.firstChild); }
}

function setStopBtn() {
  chronometer.startClick();
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.replace('start', 'stop');
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.replace('reset', 'split');
}

function setStartBtn() {
  chronometer.stopClick();
  btnLeft.innerHTML = 'START';
  btnLeft.classList.replace('stop', 'start');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.replace('split', 'reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === 'btn split') {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  }
});
