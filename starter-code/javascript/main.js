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
  minUni.innerText = chronometer.getMinutes()
}
function printSeconds() {
  setInterval(function(){
    var seconds = chronometer.getSeconds()
    if(seconds < 10){
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
  } else {
    btnLeft.className = "btn start"
    btnLeft.innerText = "START"
    btnRight.className = "btn reset"
    btnRight.innerText = "RESET"
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnLeft.addEventListener('click', function () {

});
