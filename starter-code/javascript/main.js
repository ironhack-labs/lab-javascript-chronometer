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
  
}

function printMinutes() {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  minutDec = minutes[0];
  minutUni = minutes[1];
  minDec.innerHTML = minutDec;
  minUni.innerHTML = minutUni;
  return;
}

function printSeconds() {
  var seconds = this.twoDigitsNumber(this.setSeconds());
  minutDec = seconds[0];
  minutUni = seconds[1];
  minDec.innerHTML = minutDec;
  minUni.innerHTML = minutUni;
  return minDec + minUni;
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  document.getElementById("btnLeft").innerHTML = "STOP";
  document.getElementById("btnLeft").className = "btn stop";
  
}

function setSplitBtn() {
  document.getElementById("btnRight").innerHTML = "SPLIT";
  document.getElementById("btnRight").className = "btn split";
}

function setStartBtn() {
  document.getElementById("btnLeft").innerHTML = "START";
  document.getElementById("btnLeft").className = "btn start";
}

function setResetBtn() {
  document.getElementById("btnRight").innerHTML = "RESET";
  document.getElementById("btnRight").className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML == "START") {
    setStopBtn();
    chronometer.startClick();
    printMinutes();
  }
  else {
    setStartBtn();
    chronometer.stopClick();
  }
return;
  
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML == "SPLIT") {
    setResetBtn();
  }
  else {
    setSplitBtn();
  }
});
