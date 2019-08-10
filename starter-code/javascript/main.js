var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var csIntervalId = 0;
var isRunning = false;

function printTime() {

}

function printMinutes() {
  const blinkMin = function () { 
    minDec.innerText = timer.minutes.toString()[0];
    if(timer.minutes.toString()[1]){
      minUni.innerText = timer.minutes.toString()[1];
    }
  }
  const csIntervalId = setInterval(blinkMin, 1000);
  setTimeout(blinkMin, 500);

}

function printSeconds() {
  const blinkSec = function () { 
    secDec.innerText = timer.seconds.toString()[0];
    if(timer.seconds.toString()[1]){
      secUni.innerText = timer.seconds.toString()[1];
    }
  }
  csIntervalId = setInterval(blinkSec, 1000);
  setTimeout(blinkSec, 500);
}

function printMilliseconds() {

}

function printSplit() {
  const split = document.createElement("li");
  console.log(timer.time);
  split.innerHTML = timer.time;
  const parent = document.getElementById("splits");
  parent.appendChild(split);
}

function clearSplits() {
  const parent = document.getElementById("splits");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
 // if (btnLeft.innerText == "START"){
if(!isRunning){
    console.log("starting..");
    timer.startClick();
    isRunning = true;
    printMinutes();
    printSeconds();
    setStopBtn();
    setSplitBtn();
//  }else if(btnLeft.innerText == "STOP"){
  }else if(isRunning){
    console.log("stopping...");
    timer.stopClick(); //clearInterval(this.intervalId);時間の流れを止める
    clearInterval(csIntervalId); // Displayし続けるのを止める
    isRunning = false;
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerText == "RESET"){
    console.log("resetting..");
    timer.resetClick(); //currentTimeを0にしている
    minDec.innerText = "0";
    minUni.innerText = "0";
    secDec.innerText = "0";
    secUni.innerText = "0";
    clearSplits();
  }else if(btnRight.innerText == "SPLIT"){
    console.log("splitting..");
    printSplit();
  }
});
