var chronometer = new Chronometer();

var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

chronometer.startClick();

function printTime() {}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
 
  if (btnLeft.className === "btn start") {
    //replace class
    btnLeft.className = "btn stop";
    //change the innerHTML
    btnLeft.innerHTML = "STOP";
    //replace class
    btnRight.className = "btn split";
    //change the innerHTML
    btnRight.innerHTML = "SPLIT";
  } else {
    btnLeft.className = "btn start";
    //change the innerHTML
    btnLeft.innerHTML = "START";
    btnRight.className = "btn reset";
    //change the innerHTML
    btnRight.innerHTML = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function(e) {

  if (btnRight.className === "btn reset") {
    //replace class
    btnRight.className = "btn split";
    //change the innerHTML
    btnRight.innerHTML = "SPLIT";
  }
});


