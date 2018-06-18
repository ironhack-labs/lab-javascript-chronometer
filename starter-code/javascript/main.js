var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var interval = "";
function printTime() {
  chronometer.startClick();
  interval = setInterval(function() {
    printSeconds();
    printMinutes();
    printMilliseconds();
  }, 10);
  return interval;
}

function printMinutes() {
  minUni.innerHTML = chronometer.minutes[1];
  minDec.innerHTML = chronometer.minutes[0];
}

function printSeconds() {
  secUni.innerHTML = chronometer.seconds[1];
  secDec.innerHTML = chronometer.seconds[0];
}

function printMilliseconds() {
  milUni.innerHTML = chronometer.milliseconds[1];
  milDec.innerHTML = chronometer.milliseconds[0];
}

function printSplit() {
  var list = document.getElementById('splits');
  var newLi = document.createElement('li');
  list.appendChild(newLi);
  newLi.innerText = chronometer.splitClick();
}

function clearSplits() {
  var splits = document.querySelectorAll('#splits li');
  for(var i=0; i < splits.length; i++){
    splits[i].remove();
  }
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className == "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.setTime();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    clearInterval(interval);
    chronometer.stopClick();
    chronometer.resetClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className == "btn reset" && btnLeft.className == "btn start") {
    chronometer.resetClick();
    chronometer.stopClick();
    clearSplits();
    clearInterval(interval);
    minUni.innerHTML = "0";
    minDec.innerHTML = "0";
    secUni.innerHTML = "0";
    secDec.innerHTML = "0";
    milUni.innerHTML = "0";
    milDec.innerHTML = "0";

  } else if (btnRight.className == "btn reset" && btnLeft.className == "btn stop") {
    setSplitBtn();
  }
  else {
    printSplit()
  }
});
