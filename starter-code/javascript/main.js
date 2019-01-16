var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var splitsOl    = document.getElementById('splits');

var intervalId;

function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
  minUni.innerText = this.chronometer.minutes[1];
  minDec.innerText = this.chronometer.minutes[0];
}

function printSeconds() {
  secUni.innerText = this.chronometer.seconds[1];
  secDec.innerText = this.chronometer.seconds[0];
}

function printMilliseconds() {

}

function printSplit() {
  var li = document.createElement("li");
  li.innerText = chronometer.split();
  splitsOl.appendChild(li);
}

function clearSplits() {
  while (splitsOl.hasChildNodes()) {
    splitsOl.removeChild(splitsOl.lastChild);
  };
}

function setStopBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerText = "START";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerText = "RESET";
  chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerText = "STOP";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerText = "SPLIT";
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  chronometer.resetClick();
  secUni.innerText = chronometer.currentTime;
  minDec.innerText = chronometer.currentTime;
  minUni.innerText = chronometer.currentTime;
  secDec.innerText = chronometer.currentTime;
  
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === "btn start") {
    setStartBtn();
  } else if (btnLeft.className === "btn stop") {
    setStopBtn();
  }
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === "btn reset") {
    setResetBtn();
    clearSplits();
  } else if(btnRight.className === "btn split") {
    printSplit();
  }
});
