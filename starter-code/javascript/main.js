/*jshint esversion: 6 */

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
  printMinutes();
  printSeconds();
  // printMilliseconds()
}

function printMinutes() {
  let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerHTML = mins[1];
  minDec.innerHTML = mins[0];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerHTML = seconds[1];
  secDec.innerHTML = seconds[0];
}
/*
function printMilliseconds() {
  let milSec = chronometer.twoDigitsNumber(chronometer.getMilSec());
  milUni.innerHTML = milSec[1];
  milDec.innerHTML = milSec[0];
}
*/
function printSplit() {
  let split = chronometer.splitClick();
  let splitElement = document.createElement('li');
  splitElement.innerHTML = split;
  splits.appendChild(splitElement);

}

function clearSplits() {
  secUni.innerHTML = 0;
  secDec.innerHTML = 0;
  minUni.innerHTML = 0;
  minDec.innerHTML = 0;
  splits.innerHTML = "";
  chronometer.resetClick();
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {
  secUni.innerHTML = 0;
  secDec.innerHTML = 0;
  minUni.innerHTML = 0;
  minDec.innerHTML = 0;
  chronometer.resetClick()
}



// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.className === 'btn start'){
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    btnRight.className = 'btn split';
    chronometer.startClick(printTime);


  } else{
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = "START";
    btnRight.className = 'btn reset';
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();


  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.className === 'btn reset'){
    setResetBtn();
    clearSplits();
  } else{
    printSplit();


  }
});
