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
var printInterval;

function printTime() {
  printInterval = setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds()
  }, 100);
}

function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {
  
}

function printSplit() {
  var li = document.createElement("li");
  li.innerHTML = `${chronometer.twoDigitsNumber(chronometer.setMinutes())}:
                ${chronometer.twoDigitsNumber(chronometer.setSeconds())}`;
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.toggle("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.toggle("split");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML === "STOP") {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    clearInterval(printInterval);
  } else {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML === "RESET") {
    chronometer.stopClick();
    chronometer.resetClick();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
