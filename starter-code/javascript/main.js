var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime(minutes, seconds) {
  printMinutes(minutes);
  
  printSeconds(seconds);
}

function printMinutes(minutes) {
  minDec.innerHTML = minutes [0]
  minUni.innerHTML = minutes [1]
}
  
function printSeconds(seconds) {
  secDec.innerHTML = seconds [0]
  secUni.innerHTML = seconds [1]
}
function printMilliseconds() {}

function printSplit() {
  var splitsss = (minutes[0] + minutes [1] +":"+ seconds [0] + seconds [1]);
  setSplitBtn(splitsss)
}

function clearSplits() {}

function setStopBtn() {
  chrono.stopClick();
}

function setSplitBtn(textsplit) {
  var parent = document.getElementById("splits");
  var liTag = document.createElement("li");
  var text = document.createTextNode(`${textsplit}`)
  
}

function setStartBtn() {
  chrono.startClick();
}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  
 if (document.getElementById("btnLeft").textContent.includes("STOP")) {
   document.getElementById('btnLeft').innerHTML = "START";
   document.getElementById('btnLeft').setAttribute("class", "btn start")
   setStartBtn();
 } else {
    document.getElementById("btnLeft").innerHTML = "STOP";
    document.getElementById("btnLeft").setAttribute("class", "btn stop");
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  
 if(document.getElementById("btnRight").textContent.includes("SPLIT")){
   document.getElementById("btnRight").innerHTML = "RESET";
   document.getElementById("btnRight").setAttribute("class", "btn reset");
   setSplitBtn();
 }
 
 else{
  document.getElementById("btnRight").innerHTML = "SPLIT";
  document.getElementById("btnRight").setAttribute("class", "btn split");
 }
});

var chrono = new Chronometer;

