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
  },1000)
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
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
let isCounterActive = true
btnLeft.addEventListener('click', function () {
  isCounterActive =! isCounterActive
  if(isCounterActive){
    //replace start
    document.getElementById("btnLeft").classList="btn stop"
    document.getElementById("btnLeft").innerHTML="STOP"
    document.getElementById("btnRight").classList="btn split"
    document.getElementById("btnRight").innerHTML="SPLIT"
    chronometer.startClick();
    printTime()
    // isCounterActive =! isCounterActive
    //llamar al HTML para poner START
} else {
  chronometer.stopClick();
  document.getElementById("btnLeft").classList="btn start"
  document.getElementById("btnLeft").innerHTML="START"
  document.getElementById("btnRight").classList="btn reset"
  document.getElementById("btnRight").innerHTML="RESET"
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  let newSplit = document.querySelector("#splits");
  if (btnRight.className==="btn reset"){
    chronometer.resetClick();
    while (newSplit.firstChild) {
    newSplit.removeChild(newSplit.firstChild);
    }
    printTime();
  } else {newSplit.appendChild(document.createElement("li")).innerHTML= `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:00`}
});
