var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

//function updateClockDisplay() {
//  var minD = chronometer.minutes.substr(0,1);
//  var minU = chronometer.minutes.substr(1,1);
//  var secD = chronometer.seconds.substr(0,1);
//  var secU = chronometer.seconds.substr(1,1);
//  minDec.innerHTML = minD;
//  minUni.innerHTML = minU;
//  secDec.innerHTML = secD;
//  secUni.innerHTML = secU;
//}


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

// Start/Stop Button
btnLeft.addEventListener('click', function (){
  var currentClass = btnLeft.className;
  if(currentClass === "btn start") {
    console.log("Starting Chrono")
    chronometer.startClick();
    btnLeft.innerHTML="STOP";
    btnRight.innerHTML="SPLIT";
    btnLeft.className="btn stop";
    btnRight.className="btn split";
  }
  else {
    console.log("Stopping Chrono")
    chronometer.stopClick();
    btnLeft.innerHTML="START";
    btnRight.innerHTML="RESET";
    btnLeft.className="btn start";
    btnRight.className="btn reset";
  }
  
});


// Reset/Split Button
//btnRight.addEventListener('click', function () {
//})
