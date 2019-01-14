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
  var interval = setInterval(function(){ 
    printSeconds(chronometer.seconds);
    printMinutes(chronometer.minutes);
  }, 1000);
}

function printMinutes(minutes) {
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];
}

function printSeconds(seconds) {
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];
}

function printMilliseconds() {

}

function printSplit() {
  var splitLi = document.createElement('li');
  splitLi.innerHTML = (chronometer.minutes + ":" + chronometer.seconds);
  var parent = document.getElementById("splits");
  parent.appendChild(splitLi);
}

function clearSplits() {
  var parent = document.getElementById("splits");
  parent.innerHTML = "";
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.getAttribute("class") === "btn start" ) {
    btnLeft.setAttribute("class","btn stop");
    btnLeft.innerHTML = "STOP";
    btnRight.setAttribute("class","btn split");
    btnRight.innerHTML = "SPLIT"
    setStartBtn();
  } else {
    btnLeft.setAttribute("class","btn start");
    btnLeft.innerHTML = "START";
    btnRight.setAttribute("class","btn reset");
    btnRight.innerHTML = "RESET"
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.getAttribute("class") === "btn reset") {
    setResetBtn();
  } else {
    setSplitBtn();
  }

});
