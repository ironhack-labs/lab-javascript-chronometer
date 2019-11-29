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
printSeconds();
printMinutes();
}

function printMinutes() {
  let min = chronometer.getMinutes();
  let formatMin = chronometer.twoDigitsNumber(min);
  minDec.innerHTML = formatMin[0];
  minUni.innerHTML = formatMin[1];
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  let formatSec = chronometer.twoDigitsNumber(sec);
  secDec.innerHTML = formatSec[0];
  secUni.innerHTML = formatSec[1];
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
    intervalId = setInterval(() => {
     printTime();
    },1000);  
  }else {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
    chronometer.stopClick();
  //  clearInterval(intervalId);
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
