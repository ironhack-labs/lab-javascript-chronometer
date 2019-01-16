var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes(minutes) {
  minDec.innerText = chronometer.minute[0];
  minUni.innerText = chronometer.minute[1];
}

function printSeconds(seconds) {
  secDec.innerText = chronometer.second[0];
  secUni.innerText = chronometer.second[1];
}

function printMilliseconds() {

}

function printSplit() {
  var li = document.createElement('li');
  li.innerText = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  while(splits.hasChildNodes()) {
    splits.removeChild(splits.lastChild);
  };
}

function setStopBtn() {
  
}

function setSplitBtn() {
  
}

function setStartBtn() {
  
}

function setResetBtn() {
  
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");  
  btnRight.classList.toggle("split");  
  
  if(btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    chronometer.startClick();
  } else if(btnLeft.innerText === "STOP") {
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnLeft.innerText === "START") {
    chronometer.resetClick();
    minDec.innerText = 0;
    minUni.innerText = 0;
    secDec.innerText = 0;
    secUni.innerText = 0;
    clearSplits();
  } else if(btnLeft.innerText === "STOP") {
    printSplit();
  }
});
