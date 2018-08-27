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

}

function printSeconds() {

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
  console.log(btnLeft.getAttribute("class"))
  if(btnLeft.getAttribute("class")=="btn start"){
    console.log("Estoy parado y me arranco")
    btnLeft.setAttribute("class","btn stop")
    btnLeft.innerHTML="STOP";
    btnRight.setAttribute("class","btn split")
    btnRight.innerHTML="SPLIT";
    chronometer.startClick();
  }else{
    console.log("Estoy arrancado y me paro")
    btnLeft.setAttribute("class","btn start")
    btnLeft.innerHTML="START";
    btnRight.setAttribute("class","btn reset")
    btnRight.innerHTML="RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.getElementsByClassName(split)>0){
    chronometer.setTime()
  }else{
    
  }
});
