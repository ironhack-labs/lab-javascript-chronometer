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
  btnLeft = document.createTextNode('STOP');
  btnLeft.className = "btn stop"
}

function setSplitBtn() {
  btnRight = document.createTextNode('SPLIT');
  btnRight.className = "btn split"
}

var btnLeft = document.getElementById("btnleft")



function setStartBtn() {
    
}

function setResetBtn() {
  
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === "START") {
    setStopBtn()
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  setSplitBtn() 
});
