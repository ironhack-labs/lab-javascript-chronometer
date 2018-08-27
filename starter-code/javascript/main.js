var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime(value) {
  var intervalId;
  if (value == true) {
    intervalId = setInterval(function() {
      printMinutes();
      printSeconds();
      printMilliseconds();
    }, 10);
  } else {
    clearInterval(intervalId);
    printMinutes();
    printSeconds();
    printMilliseconds();
  }
}

function printMinutes() {
  minDec.innerHTML = chronometer.setTime()[0][0];
  minUni.innerHTML = chronometer.setTime()[0][1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.setTime()[1][0];
  secUni.innerHTML = chronometer.setTime()[1][1];
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.setTime()[2][0];
    milUni.innerHTML = chronometer.setTime()[2][1];
}


// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML == "START") {
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerHTML = "STOP";
    chronometer.startClick();
    printTime(true);
  } else if (btnLeft.innerHTML == "STOP") {
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerHTML = "START";
    chronometer.stopClick();
    printTime(false);
  }
});
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML == "START") {
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerHTML = "RESET";
  } else if (btnLeft.innerHTML == "STOP") {
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT";
  }
});
// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML == "RESET") {
    chronometer.resetClick();
    printTime(true);
    document.getElementById("splits").innerHTML = "";

  } else if (btnRight.innerHTML == "SPLIT") {
    var min = chronometer.setTime()[0];
    var sec = chronometer.setTime()[1];
    var milSec = chronometer.setTime()[2];
    var splitTime = min + ":" + sec + ":" + milSec;
    var splitsText = document.createTextNode(splitTime);
    var splitLi = document.createElement("LI");
    splitLi.appendChild(splitsText);
    document.getElementById("splits").appendChild(splitLi);
  }
});
