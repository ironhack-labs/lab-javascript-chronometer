var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

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
 console.log(document.getElementById("btnLeft").textContent)
 if (document.getElementById("btnLeft").textContent.includes("STOP")) {
   document.getElementById('btnLeft').innerHTML = "START";
   document.getElementById('btnLeft').setAttribute("class", "btn start")
 } else {
    document.getElementById("btnLeft").innerHTML = "STOP";
    document.getElementById("btnLeft").setAttribute("class", "btn stop");
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  
 if(document.getElementById("btnRight").textContent.includes("SPLIT")){
   document.getElementById("btnRight").innerHTML = "RESET";
   document.getElementById("btnRight").setAttribute("class", "btn reset");
 }
 
 else{
  document.getElementById("btnRight").innerHTML = "SPLIT";
  document.getElementById("btnRight").setAttribute("class", "btn split");
 }
});
