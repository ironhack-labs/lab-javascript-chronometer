var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var sphere      = document.getElementById('sphere');
var splitOl     = document.getElementById('splits');
var startOrStop = 'stop';


function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  var mins = chronometer.minutes;
  minDec.innerHTML = mins[0];
  minUni.innerHTML = mins[1];
}

function printSeconds() {
  var secs = chronometer.seconds;
  secDec.innerHTML = secs[0];
  secUni.innerHTML = secs[1];
}

// function printMilliseconds() {

// }

function printSplit() {
  var liItem = document.createElement('li');
  var time = document.createElement('span');
  time.innerHTML = minDec.innerHTML + minUni.innerHTML + ":" + secDec.innerHTML + secUni.innerHTML;
  liItem.appendChild(time);
  splitOl.appendChild(liItem);
}

function clearSplits() {
  while (splitOl.firstChild) {
    splitOl.removeChild(splitOl.firstChild);
  }
}

function setStopBtn() {
  btnLeft.innerHTML =  'STOP';
  startOrStop = 'start';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  startOrStop = 'stop';
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  startOrStop === 'start' ? chronometer.stopClick() :  chronometer.startClick();
  startOrStop === 'start' ? setStartBtn() : setStopBtn();
  startOrStop === 'start' ? setSplitBtn() : setResetBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  startOrStop === 'start' ? printSplit() : chronometer.resetClick();
});
