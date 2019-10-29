var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splitList = document.getElementById("splits");

function printTime() {
  this.printMinutes();
  this.printSeconds();
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());

  //   console.log(min)
  minDec.innerText = min[0];
  minUni.innerText = min[1];
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());

  console.log(sec);
  secDec.innerText = sec[0];
  secUni.innerText = sec[1];
}

function printMilliseconds() {}

function printSplit() {
  var listItem = document.createElement("li");
  listItem.innerHTML = chronometer.splitClick();
  splitList.appendChild(listItem);
}

function clearSplits() {
    splitList.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
}

// Start/Stop Button
let isRunning = false;

btnLeft.addEventListener("click", function() {
  isRunning = !isRunning;
  if (isRunning) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick(printTime);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (this.classList.contains("split")) {
    printSplit();
  } else {
    clearSplits()
    chronometer.resetClick()
    printTime()
  }
});
