var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById("splits")
var started     = false;

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.innerText = chronometer.minutes[0];
  minUni.innerText = chronometer.minutes[1];
}

function printSeconds() {
  secDec.innerText = chronometer.seconds[0];
  secUni.innerText = chronometer.seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
  var node = document.createElement("LI");
  node.className = "split-time";
  var splitTime = document.createTextNode(chronometer.minutes + ":" + chronometer.seconds)
  node.appendChild(splitTime);
  splits.appendChild(node);
}

function clearSplits() {
  while(splits.firstChild) {
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(started === false){
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
  started = !started;
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(started === false) {
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
  }
});
