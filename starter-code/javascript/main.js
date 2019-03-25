var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits = document.getElementById('splits');
var intervalId = 0;


function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  var minutes = chronometer.setTime().minutes;
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  var seconds = chronometer.setTime().seconds;
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printMilliseconds() {
  var milliseconds = chronometer.setTime().milliseconds;
  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];
}

function printSplit(currentTime) {
  var newSplit = document.createElement('li');
  newSplit.innerText = `${currentTime}`;
  splits.append(newSplit);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className ="btn split";
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.className ="btn start";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className ="btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  chronometer.toggleClick();
  if(chronometer.running){
    intervalId = setInterval(printTime, 10);
  }else{
    clearInterval(intervalId);
  }
  printDOMBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(!chronometer.running){
    chronometer.resetClick();
    clearSplits();
    printTime();
  }else{
    let time = chronometer.splitClick();
    printSplit(time);
  }
  printDOMBtn();
});

function printDOMBtn(){
  if(!chronometer.running){
    setStartBtn();
    setResetBtn();
  }else{
    setStopBtn();
    setSplitBtn();
  }
}

window.onload = function(){
  printDOMBtn();
};