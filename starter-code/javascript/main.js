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

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {
  chronometer.startClick();
  setInterval(printTime, 1000);
  printStopButton();
}

function setResetBtn() {

 chronometer.resetClick() 
 printSplitButton()

  
}


function printStopButton(){
  btnLeft.innerText = "STOP"
  btnLeft.className = "btn stop"

}
function printSplitButton(){
  btnRight.innerText = "SPLIT"
  btnRight.className ="btn split"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
 
  if(!chronometer.running){
    chronometer.running=true;
    setStartBtn();
  }else{

  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(!chronometer.running){
 chronometer.running=true;
    setResetBtn();
    }else{
      

  }
  
  
  
});
