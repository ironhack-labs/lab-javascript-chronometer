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

function printMinutes(time) {
  minDec.innerHTML = time[0][0]
  minUni.innerHTML = time[0][1]
}

function printSeconds(time) {
  secDec.innerHTML = time[1][0]
  secUni.innerHTML = time[1][1]
}

function printMilliseconds(time) {
  milDec.innerHTML = time[0]
  milUni.innerHTML = time[1]
}

function printSplit(time, mili) {
  var newLine = document.createElement("li");
  timeArr = chronometer.setTime(time)
  miliStr = chronometer.twoDigitsNumber(chronometer.setMilliseconds(mili))
  newLine.innerHTML = timeArr[0] + ":" + timeArr[1] + ":" + miliStr;
  var splits = document.getElementById("splits");
  splits.appendChild(newLine);
}

function clearSplits() {
  document.getElementById("minDec").innerHTML = 0;
  document.getElementById("minUni").innerHTML = 0;
  document.getElementById("secDec").innerHTML = 0;
  document.getElementById("secUni").innerHTML = 0;
  var mysplit = document.getElementById("splits");
  while (mysplit.firstChild){
    mysplit.removeChild(mysplit.firstChild)
  }
  
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
  if (btnLeft.innerHTML === "START"){
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute("class", "btn stop");
    chronometer.startClick();
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute("class", "btn split");
  } else {
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute("class", "btn start");
    chronometer.stopClick();
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute("class", "btn reset");
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML === "RESET"){
    
  clearSplits();

  } else {
    
    printSplit(chronometer.currentTime, chronometer.milisec)
  }
});
