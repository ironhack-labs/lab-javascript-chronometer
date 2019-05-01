var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

let timeAct;

function printTime() {
  timeAct = setInterval(() => {
    printMinutes();
    printSeconds();
  });
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minUni.innerText = chronometer.twoDigitsNumber(minutes)[1];
  minDec.innerText = chronometer.twoDigitsNumber(minutes)[0];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secUni.innerText = chronometer.twoDigitsNumber(seconds)[1];
  secDec.innerText = chronometer.twoDigitsNumber(seconds)[0];
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
  let time = 0;
  if (btnLeft.className == "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.innerText = "STOP";
    btnRight.className = "btn split";
    btnRight.innerText = "SPLIT";
    chronometer.startClick();
  } else if (btnLeft.className == "btn stop") {
    btnLeft.className = "btn start";
    btnLeft.innerText = "START";
    btnRight.className = "btn reset";
    btnRight.innerText = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className == "btn reset") {
    // btnRight.className = "btn split";
    // btnRight.innerText = "SPLIT";
  } else if (btnRight.className == "btn split") {
    // btnRight.className = "btn reset";
    // btnRight.innerText = "RESET";
  }
});
/* Set the btnLeft button with the text STOP, and the class btn stop.
Set the btnRight button with the text SPLIT, and the class btn split.
 */
