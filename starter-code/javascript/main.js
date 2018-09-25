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
  var intervalId = setInterval(function(){
    chronometer.startClick();
    printMinutes();        
    printSeconds();
  }, 1000);
  return intervalId;
  }


function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes().toString());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1]; 
}

function printSeconds() {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds().toString());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1]; 
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  btnLeft.innerText = "START";
  
}

function setSplitBtn() {
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerText = "STOP";
}

function setResetBtn() {
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if (btnLeft.innerText ==='START') {
setStartBtn();
setSplitBtn();
printTime();
}
else if (btnLeft.innerText === 'STOP') {
  setStopBtn();
  setResetBtn();
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
if (btnLeft.innerText === 'STOP') {
  setSplitBtn()
}
else if (btnLeft.innerText === 'START') {
  setResetBtn()
}
});
