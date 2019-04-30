var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

let intervalAct;
let intervalActMin;

function printTime() {}

function printMinutes() {
  intervalActMin = setInterval(() => {
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  });
}

function printSeconds() {
  intervalAct = setInterval(() => {
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  });
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (this.innerHTML === "START") {
    // CHANGE THE BUTTONS
    this.setAttribute("class", "btn stop");
    this.innerHTML = "STOP";

    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT";
    // START THE TIMER
    chronometer.startClick();
    printSeconds();
    printMinutes();
  } else {
    // CHANGE THE BUTTONS
    this.setAttribute("class", "btn start");
    this.innerHTML = "START";

    btnRight.setAttribute("class", "btn reset");
    btnRight.innerHTML = "RESET";
    // STOP THE TIMER
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (this.innerHTML === "SPLIT") {
    let liSplit = document.createElement("li");
    liSplit.innerHTML = `${chronometer.twoDigitsNumber(
      chronometer.getMinutes()
    )} : ${chronometer.twoDigitsNumber(chronometer.getSeconds())}`;
    document.querySelector("ol").appendChild(liSplit);
  } else {
    chronometer.currentTime = 0;
    chronometer.intervalId = 0;
    document.querySelector("ol").innerHTML = "";
  }
});
