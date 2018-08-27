var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
minDec.innerHTML = minutes[0];
minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
  var time = minDec.innerHTML + minUni.innerHTML + ":" + secDec.innerHTML + secUni.innerHTML;

  var li = document.createElement("li");
  var split = document.createTextNode(time);
  li.appendChild(split);
  var ol = document.getElementById("splits");
  ol.appendChild(li);
  
}

function clearSplits() {

}

function setStopBtn() {
  chronometer.stopClick();
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";

}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";

}

function setStartBtn() {
  chronometer.startClick();
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
}

function setResetBtn() {
  chronometer.resetClick;
  btnRight.innerHTML = "RESET";



}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className == "btn stop") {
    setResetBtn();
    setStopBtn();
  } else {
    setStartBtn();
    setSplitBtn();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
if (btnRight.className == "btn reset"){
  printSplit();
}else{
  printSplit();
}
});
