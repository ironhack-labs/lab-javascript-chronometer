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
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// function printMilliseconds() {

// }

function printSplit() {
  let seconds = chronometer.setSeconds()
  let minutes = chronometer.setMinutes()

  let split = document.createElement('li');
  split.innerHTML = `${chronometer.twoDigitsNumber(minutes)} : ${chronometer.twoDigitsNumber(seconds)}`;
  document.getElementById('splits').appendChild(split);
}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

// function setStopBtn() {

// }

// function setSplitBtn() {

// }

// function setStartBtn() {

// }

function setResetBtn() {
  secDec.innerHTML = '0';
  secUni.innerHTML = '0';
  minDec.innerHTML = '0';
  minUni.innerHTML = '0';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.getAttribute('class') === 'btn start'){
    btnLeft.innerHTML = 'STOP';
    btnLeft.setAttribute('class', 'btn stop');
    btnRight.innerHTML = 'SPLIT';
    btnRight.setAttribute('class', 'btn split');
    chronometer.startClick();
  } else if (btnLeft.getAttribute('class') === 'btn stop') {
    btnLeft.innerHTML = 'START';
    btnLeft.setAttribute('class', 'btn start');
    btnRight.innerHTML = 'RESET';
    btnRight.setAttribute('class', 'btn reset');
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.getAttribute('class') === 'btn split'){
    printSplit();
  } else if (btnRight.getAttribute('class') === 'btn reset'){
    chronometer.resetClick();
    setResetBtn();
    clearSplits();
  }
});
