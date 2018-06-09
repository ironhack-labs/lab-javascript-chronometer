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
  document.querySelector("#minDec").innerHTML = chronometer.minutes[0];
  document.querySelector("#minUni").innerHTML = chronometer.minutes[1];
}

function printSeconds() {
  document.querySelector("#secDec").innerHTML = chronometer.seconds[0];
  document.querySelector("#secUni").innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
  parentNode = document.getElementById('splits');
  var child = document.createElement("li");
  parentNode.appendChild(child);
  child.innerHTML = chronometer.minutes + ":" + chronometer.seconds;
}

function clearSplits() {
  parentNode2 = document.getElementById('splits');
  child2 = document.querySelectorAll("li");

  for(var i = 0 ; i < child2.length ; i++) {
    parentNode2.removeChild(child2[i]);
  }
  
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
  if (document.getElementById("btnLeft").innerHTML === "START") {
    document.getElementById("btnLeft").innerHTML = "STOP";
    document.getElementById("btnLeft").className = "btn stop";
    document.getElementById("btnRight").innerHTML = "SPLIT";
    document.getElementById("btnRight").className = "btn split";
    chronometer.startClick();
    printMinutes();
    printSeconds();
  } else {
    document.getElementById("btnLeft").innerHTML = "START";
    document.getElementById("btnLeft").className = "btn start";
    document.getElementById("btnRight").innerHTML = "RESET";
    document.getElementById("btnRight").className = "btn reset";
    chronometer.stopClick();
  }

});
// Should we add 'false' at the end as per Stackoverflow?


// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (document.getElementById("btnRight").innerHTML === "RESET") {
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
  }

});
