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
  setInterval(()=>{
    printMinutes();
    printSeconds();
  },1000);
  setInterval(()=>{
    if (chronometer.miliSeconds<100) {
      printMilliseconds()
    }
    else {
      chronometer.miliSeconds=0;
    }
    
  },10);
  
}

function printMinutes() {
  minDec.innerHTML= chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML= chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secUni.innerHTML= chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML= chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printMilliseconds() {
  milDec.innerHTML=chronometer.twoDigitsNumber(chronometer.miliSeconds)[0];
  milUni.innerHTML=chronometer.twoDigitsNumber(chronometer.miliSeconds)[1];
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

let isAnimationActive = true;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
  isAnimationActive = !isAnimationActive;
  if(isAnimationActive) {
    btnLeft.innerHTML="START";
    btnLeft.className="btn start";
  
    btnRight.innerHTML="RESET";
    btnRight.className="btn reset";
    chronometer.stopClick();
  }
  else {
    chronometer.startClick();
    printTime();
    btnRight.innerHTML="SPLIT";
    btnRight.className="btn split";
    btnLeft.innerHTML="STOP";
    btnLeft.className="btn stop";
    
  }
});
let newSplit= document.querySelector("#splits");

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.innerHTML=="SPLIT") {
    // document.querySelector("body").style.backgroundColor = "red";
    newSplit.appendChild(document.createElement("li")).innerHTML= `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:00`
  }
  else {
    chronometer.currentTime= 0;
    printMinutes();
    printSeconds();
    while (newSplit.firstChild) {
      newSplit.removeChild(newSplit.firstChild);
    }
  }
  
});
