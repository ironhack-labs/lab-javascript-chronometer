var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');


function printTime(minutes,seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  minDec.innerText=minutes[0];
  minUni.innerText=minutes[1];
}

function printSeconds(seconds) {
  secDec.innerText=seconds[0];
  secUni.innerText=seconds[1];

}

function printMilliseconds() {

}

function printSplit(minutes,seconds) {
    var split=document.createElement('li');
    split.innerText=(minutes+":"+seconds); 
    splits.appendChild(split);
}

function clearSplits() {
    splits.innerHTML="";
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
if (this.classList.contains("start")){
  this.classList.remove("start");
  this.classList.add("stop");
  this.innerText="STOP";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerText="SPLIT";
  chronometer.startClick();
}
else{
  this.classList.remove("stop");
  this.classList.add("start");
  this.innerText="START";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerText="RESET";
  chronometer.stopClick();
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (this.classList.contains("split")){
    chronometer.splitClick();
  }
  else{
    chronometer.resetClick();
  }

});


