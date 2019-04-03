var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var minFunct    = document.getElementsByName('chronometer.getMinutes()');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  //chronometer.getMinutes()
  minFunct.innerHTML;
}

function printSeconds() {
  //console.log(`${chronometer.getSeconds()}`);
  document.getElementsByName("chronometer.getSeconds()").innerHTML;
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  clearInterval();
}

function setSplitBtn() {

}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
 if (btnLeft.classList.contains("start")){
   btnLeft.className ="btn stop";
   btnLeft.textContent = "STOP";
   btnRight.textContent = "SPLIT";
   btnRight.className = "btn split";
   setStartBtn();
   document.getElementsByName("printTime()").innerHTML;
 } else {
   btnLeft.textContent = "START";
   btnLeft.className = "btn start";
   btnRight.className = "btn reset";
   btnRight.textContent = "RESET";
   setStopBtn();
 }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});

