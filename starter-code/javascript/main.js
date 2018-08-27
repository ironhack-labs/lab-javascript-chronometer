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
  printMilliseconds();
}

function printMinutes() {
minDec.innerHTML = chronometer.ourMin[0];
minUni.innerHTML = chronometer.ourMin[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.ourSec[0];
  secUni.innerHTML = chronometer.ourSec[1];
}

function printMilliseconds() {
milDec.innerHTML = chronometer.milli[0];
milUni.innerHTML = chronometer.milli[1];
}

function printSplit() {
var node = document.createElement("li");                 
var textnode = document.createTextNode(chronometer.ourMin + ":" + chronometer.ourSec);        
node.appendChild(textnode);                              
document.getElementById("splits").appendChild(node);
}

function clearSplits() {
var elem = document.getElementById("splits");
elem.parentNode.removeChild(elem);
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if(btnLeft.innerHTML == "START"){
  setStopBtn();
  setSplitBtn();
  chronometer.startClick();
  setInterval(function(){
  printTime();
  },0,1);
  
  
}
else if(btnLeft.innerHTML == "STOP"){
  setStartBtn(); 
  setResetBtn();
  chronometer.stopClick();
}

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.innerHTML == "RESET"){
    chronometer.resetClick();
    clearSplits();
  }else if(btnRight.innerHTML == "SPLIT"){
    printSplit();
  }
});
