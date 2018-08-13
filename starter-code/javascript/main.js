var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minUni.innerHTML = chronometer.minutes.charAt(1);
  minDec.innerHTML = chronometer.minutes.charAt(0);
}

function printSeconds() {
  secUni.innerHTML = chronometer.seconds.charAt(1);
  secDec.innerHTML = chronometer.seconds.charAt(0);
}

function printMilliseconds() {
  milUni.innerHTML = chronometer.miliseconds.charAt(1);
  milDec.innerHTML = chronometer.miliseconds.charAt(0);
}

function printSplit() {
  var li = document.createElement('li');
  li.innerHTML = chronometer.minutes + ':' + chronometer.seconds + ':' + chronometer.miliseconds;
  splits.appendChild(li);
}

function clearTime() {
  minUni.innerHTML = 0;
  minDec.innerHTML = 0;
  secUni.innerHTML = 0;
  secDec.innerHTML = 0;
  milUni.innerHTML = 0;
  milDec.innerHTML = 0;
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.classList.remove();
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
  chronometer.startClick();
}

function setSplitBtn() {
  btnRight.classList.remove();
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.classList.remove();
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.classList.remove();
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML == "START") {
    setStopBtn();
    setSplitBtn();
    return;
  }
  setStartBtn();
  setResetBtn();
  return;
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML == "RESET") {
    chronometer.resetClick();
    return;
  }
  chronometer.splitClick();
  return;
});
