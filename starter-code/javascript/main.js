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
  const intervalId = setInterval(() => {
    printSeconds();
    printMinutes();
    //printMilliseconds();
  }, 1000);

  return intervalId;
}

function printTimeMilli() {
  const intervalId2 = setInterval(() => {
    printMilliseconds();
  }, 10);
  return intervalId2;
}
function printMinutes() {
  var minutes = chronometer.getMinutes();
  var min = chronometer.twoDigitsNumber(minutes);
  minDec.textContent = `${min[0]}`;
  minUni.textContent = `${min[1]}`;
  return min;
}

function printSeconds() {
  var seconds = chronometer.getSeconds();
  var sec = chronometer.twoDigitsNumber(seconds);
  secDec.textContent = `${sec[0]}`;
  secUni.textContent = `${sec[1]}`;
  return sec;
}

function printMilliseconds() {
  var milliSeconds = chronometer.getMilliseconds();
  var milli = chronometer.twoDigitsNumber(milliSeconds);
  milDec.textContent = `${milli[0]}`;
  milUni.textContent = `${milli[1]}`;
  return milli;
}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.textContent === "START") {
    btnLeft.textContent = "STOP";
    btnRight.textContent = "SPLIT";
    btnLeft.className = "btn stop";
    btnRight.className = "btn split";
    chronometer.startClick();
    printTime();
    printTimeMilli();
  } else {
    btnLeft.textContent = "START";
    btnRight.textContent = "RESET";
    btnLeft.className = "btn start";
    btnRight.className = "btn reset";
    chronometer.stopClick();
    chronometer.stopClickMilli();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.textContent === "SPLIT") {
    var splitTime =
      printMinutes() + ":" + printSeconds() + ":" + printMilliseconds();
    splits.innerHTML += `<li>${splitTime}</li>`;
  } else {
    splits.innerHTML = "";
    chronometer.resetClick();
  }
});
