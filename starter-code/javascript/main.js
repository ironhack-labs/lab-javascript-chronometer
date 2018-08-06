var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splits = document.getElementById('splits');


function printMinutes(chronometer) {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds(chronometer) {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printTime() {
  printMinutes(chronometer);
  printSeconds(chronometer);
  printMilliseconds(chronometer);
}

function printMilliseconds() {
  var miliseconds = chronometer.twoDigitsMili(chronometer.setMilliseconds());
  milDec.innerHTML = miliseconds[0];
  milUni.innerHTML = miliseconds[1];
}

function printSplit() {
  var newTime = document.createElement('li');
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
  var miliseconds = chronometer.twoDigitsMili(chronometer.setMilliseconds());
  newTime.innerHTML = minutes + ":" + seconds + ":" + miliseconds;
  splits.appendChild(newTime);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn(chronometer) {
  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn(chronometer) {
  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerHTML = "START";
}

function setResetBtn(chronometer) {
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute('class', 'btn reset');
}

var printInterval = 0;

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.getAttribute('class') === "btn start") {
    chronometer.startClick();
    setStopBtn(chronometer);
    setSplitBtn();
    printInterval = setInterval(printTime, 10);
  } else {
    chronometer.stopClick();
    setStartBtn(chronometer);
    setResetBtn(chronometer);
    clearInterval(printInterval);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.getAttribute('class') === "btn reset"){
    chronometer.currentTime = 0;
    printTime(chronometer);
    clearSplits();
  }
  else {
    printSplit();
  }
});