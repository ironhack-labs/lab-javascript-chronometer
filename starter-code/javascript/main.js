var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits = document.getElementById("splits");

function printTime() {
  var time = chronometer.setTime();
  console.log(time);
  printMilliseconds(time.slice(-2));
  printSeconds(time.slice(-4));
  printMinutes(time.slice(0, 2));
}

function printMinutes(minutes) {
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printMilliseconds(milliseconds) {
  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];
}

function printSplit() {
  var timeLi =  document.createElement("li");
  var time = chronometer.setTime();

  time = time.slice(0, 2) + ':' + time.slice(-4, 4) + ':' + time.slice(-2);

  timeLi.innerText = time;
  splits.appendChild(timeLi);
}

function clearSplits() {
  while (splits.firstChild) {
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerText = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  var intervalID = 0;

  if (btnLeft.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    this.intervalID = setInterval(printTime, 1);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    clearInterval(this.intervalID);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerText === 'RESET') {
    chronometer.resetClick();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});

