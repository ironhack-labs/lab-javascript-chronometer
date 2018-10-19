var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var chronometer = new Chronometer();

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  var minutes = Math.floor(chronometer.currentTime / 60);
  var decMin = 0;
  var uniMin = 0;
  var minutesString = minutes.toString();
  uniMin = minutesString[1];
  if (minutesString.length === 1) uniMin = minutesString;

  minUni.innerHTML = uni = minutesString;
}

function printSeconds() {
  var seconds = chronometer.currentTime % 60;
  var dec = 0;
  var uni = 0;

  var secondString = seconds.toString();
  uni = secondString[1];
  if (secondString.length === 1) uni = secondString;

  secUni.innerHTML = uni;

  dec = secondString[0];
  if (secondString.length === 1) dec = 0;

  secDec.innerHTML = dec;
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  document.getElementById("splits").innerHTML +=
    "<li>" + chronometer.splitClick() + "</li>";
}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  document.getElementById("splits").innerHTML = "";
  chronometer.currentTime = 0;
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  console.log(this.classList);
  var rigthButton = document.querySelector("#btnRight");
  if (this.classList.contains("start")) {
    this.classList.remove("start");
    this.classList.add("stop");

    rigthButton.classList.add("split");
    rigthButton.classList.remove("reset");

    this.innerHTML = "STOP";
    rigthButton.innerHTML = "SPLIT";
    setStartBtn();
  } else {
    this.classList.add("start");
    this.classList.remove("stop");

    rigthButton.classList.add("reset");
    rigthButton.classList.remove("split");

    this.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (this.classList.contains("split")) {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
