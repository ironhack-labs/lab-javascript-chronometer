var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var intervalId2 = 0;
function printTime() {
  intervalId2 = setInterval(function() {
    var array = chronometer.setTime();
    printMinutes(array[0]);
    printSeconds(array[1]);
  }, 1000);
}

function printMinutes(minute) {
  var minuteInNumber = minute.split("");
  minDec.innerHTML = minuteInNumber[0];
  minUni.innerHTML = minuteInNumber[1];
}

function printSeconds(second) {
  var secondInNumber = second.split("");
  secDec.innerHTML = secondInNumber[0];
  secUni.innerHTML = secondInNumber[1];
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
  if (btnLeft.className == "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.innerText = "STOP";
    btnRight.className = "btn split";
    btnRight.innerText = "SPLIT";
    chronometer.startClick();
    printTime();
  } else {
    btnLeft.className = "btn start";
    btnLeft.innerText = "START";
    btnRight.className = "btn reset";
    btnRight.innerText = "RESET";
    chronometer.stopClick();
    clearInterval(intervalId2);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
