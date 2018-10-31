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

  var time = Chronometer.setTime();
  minDec.innerText=time[0];
  minUni.innerText=time[1];
  secDec.innerText=time[3];
  secUni.innerText=time[4];

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

function setStopBtn() {}
  

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

  minDec.innerText= "0"
  minUni.innerText= "0"
  secDec.innerText= "0"
  secUni.innerText= "0"

  document.getElementById("splits").innerHTML = "";

}

  // Start/Stop Button
btnLeft.addEventListener('click', function () {

  if (document.getElementById("btnLeft").innerText === "START") {
    document.getElementById("btnLeft").innerText = "STOP";
    document.getElementById("btnLeft").className = "btn stop";
    printTime() 
  } else {
    document.getElementById("btnLeft").innerText = "START";
    document.getElementById("btnLeft").className = "btn start"

  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (document.getElementById("btnRight").innerText === "STOP") {
    document.getElementById("btnRight").innerText = "SPLIT";
    document.getElementById("btnRight").className = "btn split";
    setResetBtn(); 
  } else {
    document.getElementById("btnRight").innerText = "STOP";
    document.getElementById("btnRight").className = "btn reset";
    var newLi = document.createElement("li");
    newLi.innerText = chronometer.setTime();
    document.getElementById("splits").appendChild(newLi)
  }
});
