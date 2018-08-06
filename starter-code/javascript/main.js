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

function printTime() {
  var varMinutes = chronometer.minutes.split("");
  var varSeconds = chronometer.seconds.split("");
  var varMilliSeconds = chronometer.milliseconds.split("");
  minDec.innerText = varMinutes[0];
  minUni.innerText = varMinutes[1];
  secDec.innerText = varSeconds[0];
  secUni.innerText = varSeconds[1];
  milDec.innerText = varMilliSeconds[0];
  milUni.innerText = varMilliSeconds[1];
}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}
var interprintID;
// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerText == "START") {
    chronometer.startClick();
    btnLeft.className = "btn stop";
    btnLeft.innerText = "STOP";
    btnRight.className = "btn split";
    btnRight.innerText = "SPLIT";
    interprintID = setInterval(printTime, 1000);
  } else {
    chronometer.stopClick();
    btnLeft.className = "btn start";
    btnLeft.innerText = "START";
    btnRight.className = "btn reset";
    btnRight.innerText = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerText == "RESET") {
    clearInterval(interprintID);
    chronometer.stopClick();
    chronometer.resetClick();

    minDec.innerText = "0";
    minUni.innerText = "0";
    secDec.innerText = "0";
    secUni.innerText = "0";
    var childs = Array.from(document.getElementsByTagName("li"));

    for (var i = 0; i < childs.length; i++) {
      childs[i].remove();
    }
  } else {
    var child = document.createElement("li");
    child.innerText =
      chronometer.minutes +
      ":" +
      chronometer.seconds +
      ":" +
      chronometer.milliseconds;
    splits.appendChild(child);
    //chronometer.splitClick();
  }
});
