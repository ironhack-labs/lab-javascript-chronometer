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

}

function printSplit(currentTime) {
  var newSplit = document.createElement('li');
  newSplit.innerHTML = `<li>${currentTime}</li>`
  splits.append(newSplit);
}

function clearSplits() {
  chronometer.clearSplits();

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
    intervalId = setInterval(printTime, 1000);
  }else{
    clearInterval(intervalId);
  }
  printDOMBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  chronometer.toggleClick();
  if(chronometer.running){
    chronometer.resetClick();
    printTime();
  }else{
    
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