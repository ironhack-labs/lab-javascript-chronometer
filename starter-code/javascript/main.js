var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var list        = document.getElementById('splits');


function printTime() {
  this.intervalId = setInterval(function () {
    printSeconds();
    printMinutes();
    //printMilliseconds();
  }, 1000);
}

function printMinutes() {
  var mins = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minDec.innerText = mins[0];
  minUni.innerText = mins[1];
}

function printSeconds() {
  var secs = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secDec.innerText = secs[0];
  secUni.innerText = secs[1];
}

function printMilliseconds() {
  var mil = chronometer.twoDigitsNumber(chronometer.setMilliseconds());
  milDec.innerText = mil[0];
  milUni.innerText = mil[1];
}

function printSplit() {
  var li = document.createElement("li");
  li.innerText = chronometer.twoDigitsNumber(chronometer.setMinutes()) + ":" + chronometer.twoDigitsNumber(chronometer.setSeconds()) + ":" + chronometer.twoDigitsNumber(chronometer.setMilliseconds());
  list.appendChild(li);
}

function clearSplits() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
  //clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerText == "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerText == "RESET") {
    chronometer.resetClick();
    clearSplits();
  } else {
    printSplit();
  }
});