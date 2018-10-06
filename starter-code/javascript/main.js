var chronometer = new Chronometer();


var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var updateId = -1;

function myChronoTimer() {
    // Our BROWSER-WINDOW timer callback updates display only
    updateClockDisplay();
}

function updateClockDisplay() {
    var minD = chronometer.minutes.substr(0,1);
    var minU = chronometer.minutes.substr(1,1);
    var secD = chronometer.seconds.substr(0,1);
    var secU = chronometer.seconds.substr(1,1);
    minDec.innerHTML = minD;
    minUni.innerHTML = minU;
    secDec.innerHTML = secD;
    secUni.innerHTML = secU;
}


function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
// When the left button is clicked while the chronometer is stopped we need to:
// Set the btnLeft button with the text STOP, and the class btn stop.
// Set the btnRight button with the text SPLIT, and the class btn split.
// else we will have to change both btnLeft and btnRight properties setting them up with the Stopped status described in the table above.

btnLeft.addEventListener("click", function() {
  var currClass = btnLeft.className;
  if (currClass == "btn stop") {
    console.log("stopping chrono");
    chronometer.stopClick();
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
    if (-1 != updateId) {
        window.clearInterval(updateId);
  } 
}
  else {
    console.log("starting chrono");
    chronometer.startClick();
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
    updateId = setInterval(myChronoTimer,1000);
  }
});

// Reset/Split Button
// btnRight.addEventListener("click", function() {
//   var currClass = btnLeft.class;
//   if (currClass = "btn start") {
//   } else if (currClass = "btn stop") {
//   }
// });
