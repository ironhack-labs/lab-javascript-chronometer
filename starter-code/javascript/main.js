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
  const mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  console.log(mins);
  minDec.innerText = mins[0];
  minUni.innerHTML = mins[1];
}

function printSeconds() {
  const secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = secs[0];
  secUni.innerHTML = secs[1];
}

function printMilliseconds() {
  const millis = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.innerText = millis[0];
  milUni.innerText = millis[1];
}

function printSplit() {
  const parent = document.getElementById("splits");
  const split = document.createElement("li");
  split.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMilliseconds())}`;
  parent.appendChild(split);
}

function clearSplits() {
  document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  } 
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    printTime();
    clearSplits();
    setStartBtn();
  } else {
    chronometer.splitClick();
  }
});
