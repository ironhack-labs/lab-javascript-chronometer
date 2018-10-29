var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime(minutes, seconds) {
  printSeconds(seconds);
  printMinutes(minutes);
}

function printMinutes(minutes) {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
  
}

function printSeconds(seconds) {
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {}

function printSplit(minutes,seconds) {
    var time = minutes+":"+seconds;
    var ol = document.getElementById("splits");
    var li = document.createElement("li");
    var textNode = document.createTextNode(time);
    li.appendChild(textNode);
    ol.appendChild(li);
   
}

function clearSplits() {
    var ol = document.getElementById("splits");
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.style.backgroundColor = "red";
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.style.backgroundColor = "rgb(3,57,157)";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.style.backgroundColor = "rgb(81,195,77)";
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.style.backgroundColor = "rgb(126,123,123)";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML === "START") {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML === "RESET") {
    clearSplits();
    chronometer.resetClick();
    printTime(chronometer.minutes,chronometer.seconds);
  } else {
    printSplit(chronometer.minutes,chronometer.seconds);
  }
});
