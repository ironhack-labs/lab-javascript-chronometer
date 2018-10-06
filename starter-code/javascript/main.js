var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var olSlit = document.getElementById("splits");

var intervalId = -1;
function printTime() {
  intervalId = setInterval(function() {
    printMinutes();
    printSeconds();
  }, 500);
}

function printMinutes() {
  var minFormat =
    chronometer.minutes > 0 ? chronometer.minutes.split("") : minDec.innerHTML;
  minDec.innerHTML = minFormat[0] || minDec.innerHTML;
  minUni.innerHTML = minFormat[1] || minUni.innerHTML;
}

function printSeconds() {
  var secFormat =
    chronometer.seconds > 0 ? chronometer.seconds.split("") : secDec.innerHTML;
  secDec.innerHTML = secFormat[0] || secDec.innerHTML;
  secUni.innerHTML = secFormat[1] || secUni.innerHTML;
}

function printMilliseconds() {}

function printSplit() {
  var li = document.createElement("li");
  li.innerHTML = chronometer.minutes + ":" + chronometer.seconds;
  olSlit.appendChild(li);
}

function clearSplits() {
  olSlit.innerHTML = "";
}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {
  clearInterval(intervalId);
  clearSplits();
  chronometer.currentTime = 0;
  chronometer.minutes = 0;
  chronometer.seconds = 0;
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
}

// Start/Stop Button
btnLeft.addEventListener("click", function(e) {
  e.target.className = "";
  btnRight.className = "";
  if (e.target.innerHTML === "START") {
    e.target.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    e.target.classList.add("btn", "stop");
    btnRight.classList.add("btn", "split");

    chronometer.startClick();
    printTime();
  } else {
    e.target.innerHTML = "START";
    btnRight.innerHTML = "RESET";

    e.target.classList.add("btn", "start");
    btnRight.classList.add("btn", "reset");

    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function(e) {
  if (e.target.innerHTML === "SPLIT") {
    printSplit();
  } else {
    setResetBtn();
  }
});
