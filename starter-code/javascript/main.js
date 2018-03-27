var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
// var milDec      = document.getElementById('milDec');
// var milUni      = document.getElementById('milUni');
var intervalId;

function printTime() {
  intervalId = setInterval(function(event) {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  var minutes = chronometer.setTime()[0];
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];
}

function printSeconds() {
  var seconds = chronometer.setTime()[1];
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];
}

// function printMilliseconds() {

// }

function printSplit() {
  var list = document.getElementById("splits");
  var element = document.createElement("li");
  element.innerHTML =
    minDec.innerHTML +
    minUni.innerHTML +
    ":" +
    secDec.innerHTML +
    secUni.innerHTML;
  list.appendChild(element);
}

function clearSplits() {}

function setStopBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerText = "RESET";
}

// Start/Stop Button  
btnLeft.addEventListener("click", function() {
  if (btnLeft.className.includes("start")) {
    setSplitBtn();
    setStopBtn();
    chronometer.startClick();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className.includes("split")) {
    printSplit();
  } else {
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    chronometer.resetClick();
    clearInterval(intervalId);
  }

});
