

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

function printSeconds() {
  var seconds = document.getElementById("secUni")
  seconds.innerHTML = chronometer.currentTime;
}

function printMilliseconds() {

}

function printSplit() {
  var ol = document.getElementById("splits")
  var li = document.createElement("li");
  li.className = "child";
  li.innerHTML = chronometer.currentTime;
  ol.appendChild(li);
  
}

function clearSplits() {
  var product = document.getElementsByClassName("child");
  var parent = document.getElementById("splits");
  var cont = document.getElementById("splits-container");
  var createOl = document.createElement("ol");

  cont.removeChild(parent);

  createOl;
  createOl.id = "splits";
  cont.appendChild(createOl);
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  var btnstart = document.getElementById("btnLeft");
  var btnReset = document.getElementById("btnRight");
  if (btnstart.className == "btn start"){
  chronometer.startClick();
  btnstart.className = "btn stop";
  btnReset.className = "btn split"
  btnstart.innerHTML = "STOP"
  btnReset.innerHTML = "SPLICE"
  } else {
    btnstart.className = "btn start";
    chronometer.stopClick();
    btnstart.innerHTML = "START";
    btnReset.innerHTML = "RESET";
    btnReset.className = "btn reset";
  }
  
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
  var btnReset = document.getElementById("btnRight");
  var btnstart = document.getElementById("btnLeft");
  if (btnReset.className == "btn reset"){
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
    printSplit();
  }
  if (btnReset.className == "btn reset" && btnstart.className == "btn start"){
    clearSplits();
  }

});
