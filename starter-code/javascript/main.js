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
  var interval = setInterval(function () {
    printSeconds();
    printMinutes();
    printMilliseconds();
}, 1000);
}

function printMinutes() {
  minDec.innerHTML = chronometer.minutes[0]; 
  minUni.innerHTML = chronometer.minutes[1]; 
}

function printSeconds() {
  secDec.innerHTML = chronometer.seconds[0]; 
  secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {
  milDec.innerHTML = chronometer.milliSec[0];
  milUni.innerHTML = chronometer.milliSec[1];
}

function printSplit() {
  var splitList = document.createElement('li');
  splitList.innerHTML = (chronometer.minutes + ':' + chronometer.seconds + ':' + chronometer.milliSec);
  var par = document.getElementById('splits');
  par.appendChild(splitList);
}

function clearSplits() {
  var parent = document.getElementById('splits');
  parent.innerHTML = '';
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === "START"){
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute('class', 'btn stop');
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute('class', 'btn split');
    chronometer.startClick();
    printTime();
  }
  else {
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute('class', 'btn start');
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute('class', 'btn reset');
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if(btnRight.innerHTML === "RESET"){
      setResetBtn();
      printTime();
  } else {
      setSplitBtn();
  }
});