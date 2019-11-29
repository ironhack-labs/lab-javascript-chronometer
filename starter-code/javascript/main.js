var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits       = document.getElementById('splits');
var splitNumber = 1;

function printTime() {
  
}

function printMinutes() {
  setInterval(function(){
    var minutes = chronometer.getMinutes()
    if(minutes < 10){
      minDec.innerText = "0"
      minUni.innerText = minutes
    } else {
      minDec.innerText = Math.floor(minutes / 10)
      minUni.innerText = minutes % 10
    }
  }, 1000)
}
function printSeconds() {
  setInterval(function(){
    var seconds = chronometer.getSeconds()
    if(seconds < 10){
      secDec.innerText = "0"
      secUni.innerText = seconds
    } else {
      secDec.innerText = Math.floor(seconds / 10)
      secUni.innerText = seconds % 10
    }
  }, 1000)
}

function printMilliseconds() {

}

function printSplit() {
  let newLi = document.createElement('li')
  newLi.setAttribute("id", "split" + splitNumber)
  splits.append(newLi)
  splitNumber ++;
}

function clearSplits() {

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
  if(btnLeft.className == "btn start"){
    chronometer.startClick()
    btnLeft.className = "btn stop"
    btnLeft.innerText = "STOP"
    btnRight.className = "btn split"
    btnRight.innerText = "SPLIT"
    printSeconds()
    printMinutes()
  } else {
    btnLeft.className = "btn start"
    btnLeft.innerText = "START"
    btnRight.className = "btn reset"
    btnRight.innerText = "RESET"
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.className == "btn reset"){

  } else {
    printSplit()
  }
});
