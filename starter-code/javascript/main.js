var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printTime() {
  setInterval(function() {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1]
}

function printMilliseconds() {

}

function printSplit() {
  let split = document.createElement("li");
  split.innerHTML = chronometer.splitClick();
  let container = document.getElementById("splits");
  container.append(split);
}

function clearSplits() {
  let container = document.getElementById("splits");
  container.innerHTML = "";
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
  chronometer.stopClick()
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if ( btnLeft.className == 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else if (btnLeft.className == 'btn stop') {
    setStartBtn();
    setResetBtn()
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if ( btnRight.className == 'btn split') {
    printSplit();
  } else if (btnRight.className == 'btn reset') {
    clearSplits() 

  }
});
