// var imported = document.createElement('script');
// imported.src = './chronometer.js';
// document.head.appendChild(imported);

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById("splits")


function printTime(minutes,seconds) {
  printMinutes(minutes)
  printSeconds(seconds)
}

function printMinutes(minutes) {
  var minD = minutes.substr(0,1);
  var minU = minutes.substr(1,1);
  minDec.innerHTML = minD
  minUni.innerHTML = minU
}

function printSeconds(seconds) {
  var secD = seconds.substr(0,1);
  var secU = seconds.substr(1,1);
  secDec.innerHTML = secD
  secUni.innerHTML = secU 
}

function printMilliseconds() {

}

function printSplit() {
  var splitTime = chronometer.currentTime
  var minutes = chronometer.setMinutes(splitTime)
  minutes = chronometer.twoDigitsNumber(minutes)
  var seconds = chronometer.setSeconds(splitTime)
  seconds = chronometer.twoDigitsNumber(seconds)
  splitTime = document.createTextNode(minutes + ':' + seconds);
  console.log(splitTime)
  var element = document.createElement('li');
  console.log(element)
  element.appendChild(splitTime)
  var parent = document.getElementById("splits")
  // console.log(parent)
  parent.appendChild(element);
}

function clearSplits() {
  splitList.innerHTML = ""
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
  //Start clicked
  if(btnLeft.innerHTML === "START"){
    btnLeft.innerHTML = "STOP"
    btnLeft.className = "btn stop"
    btnRight.innerHTML = "SPLIT"
    btnRight.className = "btn split"
    chronometer.startClick()
  } else //Stop clicked
  {
    btnLeft.innerHTML = "START"
    btnLeft.className = "btn start"
    btnRight.innerHTML = "RESET"
    btnRight.className = "btn reset"
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  //Split clicked
  if(btnRight.innerHTML === "SPLIT"){
    printSplit()
  } else //Reset clicked
  {
    printTime("00","00")
    clearSplits()
  }
});
