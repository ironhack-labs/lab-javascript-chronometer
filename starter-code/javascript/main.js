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
  intervalId = setInterval(function(){
    printMinutes();
    printSeconds();
    printMilliseconds();
  },); 
}

function printMinutes() {
  a=chronometer.minutes;


  minDec.innerText = a[0];
  minUni.innerText = a[1];

}

function printSeconds() {
  a = chronometer.seconds;

  secDec.innerText = a[0];
  secUni.innerText = a[1];

}

function printMilliseconds() {
  a = chronometer.milliSeconds;

  milDec.innerText = a[0];
  milUni.innerText = a[1];
}

function printSplit() {
  var splitList = document.createElemenet("li");
  splitList.innerText = chronometer.splitClick();
}

function clearSplits() {
  var allSplits = document.querySelectorAll("#splits li");
  for (var i = 0; i < allSplits.length; i++){
    allSplits[i].remove();
  }
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerText='STOP';

}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerText="SPLIT";

}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerText="start";

}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerText="RESET";

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
    chronometer.stopClick();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerText == "SPLIT") {
    chronometer.splitClick();
    clearSplits();
  } else {
    printSplit();
  }

});
