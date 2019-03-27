var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var orderList = document.getElementById("splits");

function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  let minutesToString = chronometer.twoDigitsNumber(minutes);
  //innerHTML=textContent aynılar
  minUni.innerHTML = minutesToString.charAt(1);
  minDec.innerHTML = minutesToString.charAt(0);
}

function printSeconds(seconds) {
  let secondsToString = chronometer.twoDigitsNumber(seconds);
  secUni.innerHTML = secondsToString.charAt(1);
  secDec.innerHTML = secondsToString.charAt(0);
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

setInterval(() => {
  printTime(chronometer.getMinutes(), chronometer.getSeconds());
}, 1);

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  function toggleText() {
    if (btnLeft.innerHTML == "START") {
      btnLeft.innerHTML = "STOP";
      btnRight.innerHTML = "SPLIT";
    } else {
      btnLeft.innerHTML = "START";
      btnRight.innerHTML = "RESET";
    }
  }
  var cssClass = btnLeft.classList.value;
  if (cssClass === "btn start") {
    btnLeft.classList.replace("start", "stop");
    btnRight.classList.replace("reset", "split");
    chronometer.startClick();
  } else {
    btnLeft.classList.replace("stop", "start");
    btnRight.classList.replace("split", "reset");
    chronometer.stopClick();
  }
  toggleText();
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML === "SPLIT") {
    let currentTime = chronometer.splitClick(
      chronometer.getMinutes(),
      chronometer.getSeconds()
    );
    const newItem = document.createElement("li");
    newItem.innerHTML = currentTime;
    orderList.appendChild(newItem);
  } else {
    chronometer.resetClick();
    while (orderList.firstChild) {
      orderList.removeChild(orderList.firstChild);
    }
  }
});
