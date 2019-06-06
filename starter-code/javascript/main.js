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
var splitsElement = document.getElementsByClassName("li");

function printTime() {}

function printMinutes() {
  var min = chronometer.getMinutes();
  var dMin = Math.floor(min / 10);
  var uMin = Math.floor(min % 10);
  minDec.innerHTML = dMin;
  minUni.innerText = uMin;
}

function printSeconds() {
  var min = chronometer.getSeconds();
  var dSec = Math.floor(min / 10);
  var uSec = Math.floor(min % 10);
  secDec.innerHTML = dSec;
  secUni.innerText = uSec;
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {
  myLis = document.querySelectorAll("li");
  myLis.forEach(oneLi => splits.removeChild(oneLi));
}

function setStopBtn() {
  if (btnLeft.classList.contains("stop")) {
    btnLeft.classList.replace("stop", "start");
    document.getElementById("btnLeft").innerText = "START";
    btnRight.classList.replace("split", "reset");
    btnRight.innerText = "RESET";
  }
}

function setSplitBtn() {
  var splitTime = document.createElement("li");
  // var dMin = Math.floor(min / 10);
  // var uMin = Math.floor(min % 10);
  // minDec.innerHTML = dMin;
  // minUni.innerText = uMin;
  splitSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  splitMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  splitTime.innerHTML = `${splitMinutes}:${splitSeconds}`;
  document.getElementById("splits").appendChild(splitTime);
}

function setStartBtn() {
  document.getElementById("btnLeft").classList.replace("start", "stop");
  document.getElementById("btnRight").classList.replace("reset", "split");
  document.getElementById("btnLeft").innerText = "STOP";
  document.getElementById("btnRight").innerText = "SPLIT";
}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    setStartBtn();
    chronometer.startClick();
    setInterval(() => {
      printMinutes();
    }, 1000);
    setInterval(() => {
      printSeconds();
    }, 1000);
  } else if (btnLeft.classList.contains("stop")) {
    setStopBtn();
    chronometer.stopClick();
  }
  // if (document.getElementById("btnLeft").classList.contains("start")) {
  //   document.getElementById("btnLeft").classList.replace("start", "stop");
  //   document.getElementById("btnRight").classList.replace("reset", "split");
  //   document.getElementById("btnLeft").innerText = "STOP";
  //   document.getElementById("btnRight").innerText = "SPLIT";
  // } else if (
  //   document.getElementById("btnLeft").classList.contains("stop")
  //   //document.getElementById("btnRight").innerText == "SPLIT"
  // ) {
  //   // document.getElementById("btnRight").classList.replace("split", "reset");
  //   document.getElementById("btnLeft").classList.replace("stop", "start");
  //   document.getElementById("btnLeft").innerHTML = "START";
  //   btnRight.classList.replace("split", "reset");
  //   btnRight.innerHTML = "RESET";
  // }
});

btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    setResetBtn();
    clearSplits();
    //document.getElementById("splits").removeChild();
  } else if (btnRight.classList.contains("split")) {
    setSplitBtn();
  }
});
