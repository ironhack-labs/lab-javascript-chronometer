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

}

function printMinutes() {

}

function printSeconds() {

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

// Iteration 2: DOM Manipulation

// Start/Stop Button

  btnLeft.addEventListener("click", function() {
    
    if (chronometer.intervalId === null) {
      setStartBtn(); // Set the btnLeft button with the text STOP, and the class btn stop.
      btnLeft.setAttribute("class", "btn stop");
      btnLeft.innerHTML = "STOP";
      btnRight.setAttribute("class", "btn split");
      btnRight.innerHTML = "SPLIT";
    } else if (chronometer.currentTime !== null) {
      setStopBtn(); // Set the btnRight button with the text SPLIT, and the class btn split.
      btnLeft.setAttribute("class", "btn start");
      btnLeft.innerHTML = "START";
      btnRight.setAttribute("class", "btn reset");
      btnRight.innerHTML = "RESET";
    }
  })

// Reset/Split Button
btnRight.addEventListener('click', function () {    
  if (chronometer.intervalId === null) {
    setResetBtn();
    printTime();
  } else if (chronometer.intervalId !== null) {
    printSplit();
  }
})
