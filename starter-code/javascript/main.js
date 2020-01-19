let chronometer = new Chronometer();
let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splitList = document.getElementById("splits");

function printTime(minutes, seconds, milliseconds) {
  printMinutes(minutes);
  printSeconds(seconds);
  printMilliseconds(milliseconds);
}

function printMinutes(minutes) {
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printMilliseconds(milliseconds) {
  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];
}

function printSplit() {
  let listItem = document.createElement("li");
  listItem.innerText =
    chronometer.getMinutes() +
    ":" +
    chronometer.getSeconds() +
    ":" +
    chronometer.getMilliseconds();
  splitList.appendChild(listItem);
}

function clearSplits() {
  document.querySelectorAll(".reset-number").forEach(function(element) {
    element.innerText = chronometer.currentTime;
  });
  splitList.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.replace("start", "stop");
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList.replace("reset", "split");
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList.replace("stop", "start");
}

function setResetBtn() {
  btnRight.classList.replace("split", "reset");
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.getAttribute("class").includes("start")) {
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
btnRight.addEventListener("click", function() {
  if (btnRight.getAttribute("class").includes("split")) {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  }
});
