var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {
  interval3 = setInterval(() => {
    let currentMinutes = chronometer.getMinutes();
    let minutesToPrint = chronometer.twoDigitsNumber(currentMinutes);
    document.querySelector("#sphere #minUni").innerHTML = minutesToPrint[1];
    document.querySelector("#sphere #minDec").innerHTML = minutesToPrint[0];
  }, 1000);
}

function printSeconds() {
  interval2 = setInterval(() => {
    let currentSeconds = chronometer.getSeconds();
    let secondsToPrint = chronometer.twoDigitsNumber(currentSeconds);
    document.querySelector("#sphere #secUni").innerHTML = secondsToPrint[1];
    document.querySelector("#sphere #secDec").innerHTML = secondsToPrint[0];
  }, 1000);
}

function printMilliseconds() {}

function printSplit(print) {
  const splitTime=document.createElement("li");
  splitTime.innerHTML = print;
  document.getElementById("splits").appendChild(splitTime);

}

function clearSplits() {}

function setStopBtn() {
  document.querySelector("#btnLeft").className = "btn stop";
  document.querySelector("#btnLeft").innerHTML = "STOP";
}

function setSplitBtn() {
  document.querySelector("#btnRight").className = "btn split";
  document.querySelector("#btnRight").innerHTML = "SPLIT";
}

function setStartBtn() {
  document.querySelector("#btnLeft").className = "btn start";
  document.querySelector("#btnLeft").innerHTML = "START";
}

function setResetBtn() {
  document.querySelector("#btnRight").className = "btn reset";
  document.querySelector("#btnRight").innerHTML = "RESET";
}

// Start/Stop Button
let isClockRunning = false;
btnLeft.addEventListener("click", function() {
  isClockRunning = !isClockRunning;
  if (isClockRunning) {
    chronometer.startClick();
    printSeconds();
    setStopBtn();
    printMinutes();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (isClockRunning) {
    printSplit(chronometer.splitClick());
  }
  else {
    chronometer.resetClick();
  }
});
