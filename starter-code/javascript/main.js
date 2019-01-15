var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var intervalId2 = 0;
function printTime() {
  intervalId2 = setInterval(function() {
    var array = chronometer.setTime();
    printMinutes(array[0])
    printSeconds(array[1]);
  }, 1000);
}
function printMinutes(minute) {
  var minuteNumber = minute.split("")
  minDec.innerHTML = minuteNumber[0]
  minUni.innerHTML = minuteNumber[1]
}

function printSeconds(second) {
  var secondNumber = second.split("")
  secDec.innerHTML = secondNumber[0]
  secUni.innerHTML = secondNumber[1]
}

function printMilliseconds() {}

function printSplit() {
  var split = document.createElement('li')
  split.innerHTML = (printMinutes(minutes) + ":" + chronometer.secondNumber)
  var clock = document.getElementById("splits")
  clock.appendChild(split)
}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className == "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
    printTime()
    
  } else {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
    chronometer.stopClick()
    clearInterval(intervalId2)
  }
});

 //Reset/Split Button
btnRight.addEventListener("click", function() {
  if ((btnLeft.className = "btn stop")) {
    printSplit();
  }
  else {
    setResetBtn();
  }
});
