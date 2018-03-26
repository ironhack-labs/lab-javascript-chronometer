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
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds())[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  document.getElementById("btnLeft").setAttribute("class","btn start");
  document.getElementById("btnLeft").innerText="START";
  chronometer.stopClick();
}

function setSplitBtn() {
  document.getElementById("btnRight").setAttribute("class","btn split");
  document.getElementById("btnRight").innerText = "SPLIT";
}

function setStartBtn() {
  document.getElementById("btnLeft").setAttribute("class","btn stop");
  document.getElementById("btnLeft").innerText = "STOP";
  chronometer.startClick();
  
  setInterval(function() {
     printTime();
  } , 1000);
}

function setResetBtn() {
  document.getElementById("btnRight").setAttribute("class","btn reset");
  document.getElementById("btnRight").innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (document.getElementById("btnLeft").innerText == "START") {
    setStartBtn();
  } 
  else if (document.getElementById("btnLeft").innerText == "STOP") {
    setStopBtn();
  }

  

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (document.getElementById("btnRight").innerText == "RESET") {
    setSplitBtn();
  } 
  else if (document.getElementById("btnRight").innerText == "SPLIT") {
    setResetBtn();
  }
});
