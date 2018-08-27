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
    //console.log("Print time!!");
    printMinutes();
    printSeconds();
    printMilliseconds();
}
function printMinutes() {
    minUni.innerHTML = chronometer.minutes[1];
    minDec.innerHTML = chronometer.minutes[0];
}
function printSeconds() {
    secUni.innerHTML = chronometer.seconds[1];
    secDec.innerHTML = chronometer.seconds[0];   
}
function printMilliseconds() {

    milUni.innerHTML = chronometer.milisecs[1];
    milDec.innerHTML = chronometer.milisecs[0];  
}
function printSplit() {
  var splitOl = document.getElementById("splits");
  var splitLi = document.createElement("li");
  splitLi.innerHTML = chronometer.minutes + ":" + chronometer.seconds +":"+ chronometer.milisecs;
  splitOl.appendChild(splitLi);
}
function clearSplits() {
if (btnRight.innerHTML === "RESET"){
  var splitOl = document.getElementById("splits");
  var splitLi = document.getElementsByTagName("li");
  for (var i = 0; i < splitLi.length; i++){
    splitOl.removeChild(splitLi[i]);
    
  }
}
}
function setStopBtn() {
  if (btnLeft.innerHTML === "STOP"){
    chronometer.stopClick();
    
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute("class", "btn start");
   } else {
    setStartBtn();
   }
}
function setSplitBtn() {
  if (btnRight.innerHTML === "SPLIT" && btnLeft.innerHTML === "STOP") {
    printSplit();
   } else if (btnRight.innerHTML === "SPLIT" && btnLeft.innerHTML === "START"){
   btnRight.setAttribute("class", "btn reset");
   btnRight.innerHTML = "RESET";
   }
}
function setStartBtn() {
 if (btnLeft.innerHTML === "START"){
   chronometer.startClick();
   
   btnLeft.innerHTML = "STOP";
   btnLeft.setAttribute("class", "btn stop");
 } else {
   setStopBtn();
   }
  
}
function setResetBtn() {
 if (btnRight.innerHTML === "RESET" && btnLeft.innerHTML == "START"){
   clearSplits();
   chronometer.resetClick();
 } else if (btnRight.innerHTML === "RESET" && btnLeft.innerHTML === "STOP"){
   btnRight.setAttribute("class", "btn split")
   btnRight.innerHTML = "SPLIT"
 }
}
// Start/Stop Button
btnLeft.addEventListener('click', function () {
  setStartBtn();
  
});
// Reset/Split Button
btnRight.addEventListener('click', function () {
  setSplitBtn();
  setResetBtn();
});