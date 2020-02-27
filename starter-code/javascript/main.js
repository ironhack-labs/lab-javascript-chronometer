var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let isRunning = false;
// let lapTimes = [];

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {}

function printSplit() {
  let $ol = document.querySelector('#splits');
  let $li = document.createElement('li');
  $li.innerHTML = chronometer.splitClick();

  $ol.appendChild($li);
}

function clearSplits() {
  chronometer.resetClick();
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (!isRunning) {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
    isRunning = true;
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
    isRunning = false;
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (!isRunning) {
    chronometer.resetClick();
  } else {
    printSplit();
    return chronometer.splitClick();
  }
});

let currInterval = setInterval(function() {
  printTime();
}, 100);
