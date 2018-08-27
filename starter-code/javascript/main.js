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
  minUni.innerHTML =  chronometer.minutes
}

function printSeconds() {
 secUni.innerHTML =  chronometer.seconds
}

function printMilliseconds() {

}

function printSplit() {
  var split = document.createElement("li")
  document.getElementById("splits").appendChild(split);
  split.innerHTML = chronometer.minutes + " : " + chronometer.seconds;
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
  //printSeconds();
  if(btnLeft.className === "btn start"){
   chronometer.startClick()
   btnLeft.className = "btn stop"
   btnLeft.innerHTML="STOP"
   btnRight.className = "btn split"
   btnRight.innerHTML="SPLIT"
  }

  else {
   chronometer.stopClick()
   btnLeft.className = "btn start"
   btnLeft.innerHTML="START"
   btnRight.className = "btn reset"
   btnRight.innerHTML="RESET"
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.className === "btn reset"){
    chronometer.resetClick();
  }
  else{ //btn right split
      printSplit();
  }
});
