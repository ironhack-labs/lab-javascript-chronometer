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
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
}

function printMilliseconds() {
  let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.textContent = milliseconds[0];
  milUni.textContent = milliseconds[1];
}

function printSplit() {
  let li = document.createElement("li");
  li.textContent = chronometer.splitClick();
  document.getElementById("splits").appendChild(li);
}

function clearSplits() {
  document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {
  btnLeft.textContent = "STOP";
  chronometer.startClick();
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  btnLeft.textContent = "START";
  chronometer.stopClick();
  btnLeft.classList.toggle("stop");
  btnRight.textContent = "RESET";
}

function setResetBtn() {
  chronometer.currentTime = 0;
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  printTime();
  if (btnLeft.textContent === "STOP") {
    setStartBtn();
  } else {
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnLeft.innerHTML === "START") {
    clearSplits();
    setResetBtn();
  } else {
    printSplit();
  }
});
