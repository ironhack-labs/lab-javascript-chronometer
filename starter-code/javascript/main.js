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


  btnLeft.innerText = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split")

}

function setStartBtn() {
 
  btnLeft.innerText = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");


}

function setResetBtn() {
  btnRight.innerText== "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");

}

// Start/Stop Button

btnLeft.addEventListener('click', function () {
  
  if(btnLeft.innerText=== "STOP") {
    setStartBtn();
  } else {
    setStopBtn();
  }


});

// Reset/Split Button
btnRight.addEventListener('click', function () {
if(btnRight.innerText==="RESET"){
  setSplitBtn();
} else {
  setResetBtn();
}


});
