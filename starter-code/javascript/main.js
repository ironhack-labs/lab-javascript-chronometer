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

function printTime() {}

function printMinutes() {
  var time = chronometer.setTime();

  minDec.innerHTML = time[1].substr(0, 1);

  minUni.innerHTML = time[1].substr(1, 1);
}

function printSeconds() {
  var time = chronometer.setTime();

  secDec.innerHTML = time[0].substr(0, 1);
  secUni.innerHTML = time[0].substr(1, 1);
}

function printMilliseconds() {}

function printSplit() {
  splits.innerHTML +=
    "<li>" +
    minDec.innerHTML +
    minUni.innerHTML +
    ":" +
    secDec.innerHTML +
    secUni.innerHTML +
    "</li>";
}

function clearSplits() {}

function setStopBtn() {
  clearInterval(chronometer.intervalId);
  clearInterval(chronometer.startStop);

  clearInterval(printSeconds);
  clearInterval(printMinutes);

  if (btnLeft.className === "btn start") {
    btnLeft.className = "btn stop";
    btnRight.className = "btn split";
  } else {
    btnLeft.className = "btn start";
    btnRight.className = "btn reset";
  }
}

function setSplitBtn() {}

function setStartBtn() {
  if (btnLeft.className === "btn start") {
    btnLeft.className = "btn stop";
    btnRight.className = "btn split";
  } else {
    btnLeft.className = "btn start";
    btnRight.className = "btn reset";
  }

  setInterval(printSeconds, 1000);
  setInterval(printMinutes, 1000);

  // chronometer.startClick();
}

function setResetBtn() {
  chronometer.resetClick();
  
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  splits.innerHTML = "";

  clearInterval(chronometer.intervalId);
  clearInterval(chronometer.startStop);

  clearInterval(printSeconds);
  clearInterval(printMinutes);
}

// Start/Stop Button

btnLeft.addEventListener("click", function() {
  if (btnLeft.className === "btn start") {
    setStartBtn();
    chronometer.startClick();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnLeft.className === "btn stop") {
    printSplit();
  } else {
    
    setResetBtn();
  }
});
