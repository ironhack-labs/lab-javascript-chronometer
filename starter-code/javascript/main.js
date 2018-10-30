//var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


// function printTime() {

// }

// function printMinutes() {

// }

// function printSeconds() {

// }

// function printMilliseconds() {

// }

// function printSplit() {

// }

// function clearSplits() {

// }

// function setStopBtn() {

// }

// function setSplitBtn() {

// }

// function setStartBtn() {

// }

// function setResetBtn() {

// }

window.onload = function () {
// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === "START") {
    myWatch.start();
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    document.getElementById("secUni").innerHTML = myWatch.seconds;
  } else {
    myWatch.stop()
    btnLeft.innerHTML = "START"
    btnLeft.classList.toggle("stop")
    btnLeft.classList.add("start")
    btnRight.innerHTML = "RESET";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
  }
  });

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML === "RESET") {
    myWatch.reset()
  } else {
    myWatch.splits()
  }
});

}