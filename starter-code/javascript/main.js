var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  chronometer.currentTime = 0;
}

function printMinutes() {
  return setInterval(() => {
    generalMin = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML = "";
    minUni.innerHTML = "";
    minUni.innerHTML = generalMin;
  }, 1000);
}

function printSeconds() {
  return setInterval(() => {
    secDec.innerHTML = "";
    secUni.innerHTML = "";
    let generalSec;
    generalSec = chronometer.twoDigitsNumber(chronometer.getSeconds());

    secUni.innerHTML = generalSec;
  }, 1000);
}

function printMilliseconds() {}

function printSplit() {
  const splitText = chronometer.currentTime;
  splits.innerHTML = splitText;
  const lis = document.createElement("li");
  btnRight.onclick = lis;
  lis.appendChild(splitText);
}

function clearSplits() {}

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
btnLeft.addEventListener("click", function() {
  if (btnLeft.className == "btn start") {
    printMinutes();
    printSeconds();
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
  } else if (btnLeft.className == "btn stop") {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if ((btnRight.className = "btn split")) {
    printSplit();
  } else {
    printTime();
  }
});
