var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printTime(minutes,seconds,miliSeconds) {
  printMinutes(minutes);
  printSeconds(seconds);
  printMilliseconds(miliSeconds);
}

function printMinutes(minutes) {
    minUni.innerText = minutes[1];
    minDec.innerText = minutes[0];
}

function printSeconds(seconds) {
    secUni.innerText = seconds[1]; 
    secDec.innerText = seconds[0];
}

function printMilliseconds(miliSeconds) {
    milUni.innerText = miliSeconds[1];
    milDec.innerText = miliSeconds[0];
 
}

function printSplit() {
  var parent = document.getElementById("splits");
  var liChild = document.createElement("li");
  liChild.innerText =  chronometer.setTime();
  parent.appendChild(liChild);
}

function clearSplits() {
  var parent = document.getElementById("splits");
  var liChilds = document.querySelectorAll("li");
  for (var i = 0; i<liChilds.length;i++) {
    parent.removeChild(liChilds[i]);
  }
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerText ="SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.classList[1] === "start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList[1] === "reset") {
    debugger;
    chronometer.resetClick(); 
    clearSplits();
    debugger;
  } else {
    printSplit();
  }

});

