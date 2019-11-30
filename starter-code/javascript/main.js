var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let internalPrintId;

function printTime() {
    printSeconds();
    printMinutes();
  
}

function printMinutes() {
  let min = chronometer.getMinutes();
  let formatMin = chronometer.twoDigitsNumber(min);
  minDec.innerText = formatMin[0];
  minUni.innerText = formatMin[1];
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  let formatSec = chronometer.twoDigitsNumber(sec);
  console.log('formatSec ==>> ', formatSec);
  secDec.innerText = formatSec[0];
  secUni.innerText = formatSec[1];
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
  if (btnLeft.className === "btn start"){
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";
     chronometer.startClick();
     intervalPrintId = setInterval(function(){
       printTime();  
     }, 1000);
    
  }else {
    clearInterval(this.intervalPrintId);
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === "btn reset"){
    btnRight.className = "btn split"
    btnRight.innerHTML = "SPLIT";
  }else {
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
  }
});
