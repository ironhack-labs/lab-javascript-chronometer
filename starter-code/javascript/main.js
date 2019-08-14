// declare an object instance of our chronometer object
var chronometer = new Chronometer();

// get all the DOM elements we need to access often
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

// function to make the start and clear buttons change
// appearance when the chrono is running
// reset changes to split
// start changes to stop

// function to change the minutes displayed
// pas as argument chronometer.getMinutes() return

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes.charAt(0);
  minUni.innerText = minutes.charAt(1);
  console.log(chronometer.currentTime);
}

// function to change the seconds displayed
// pas as argument chronometer.getSeconds() return

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds.charAt(0);
  secUni.innerText = seconds.charAt(1);
  console.log(chronometer.currentTime);
}

// BONUS function printMilliseconds() {}

function printSplit(timeAtSplit) {
  let splitTime = document.createElement("li");
  splitTime.innerText = timeAtSplit;
  document.getElementById("splits").appendChild(splitTime);
}

function toggleBtnClasses() {
  // toggle between style for stop and style for start
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  if (btnLeft.classList[1] == "start") {
    btnLeft.innerText = "START";
  } else {
    btnLeft.innerText = "STOP";
  }

  // toggle between style for reset and style for split
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  if (btnRight.classList[1] == "reset") {
    btnRight.innerText = "RESET";
  } else {
    btnRight.innerText = "SPLIT";
  }
}

let intervalSec, intervalMin;

// Start/Stop Button
btnLeft.addEventListener("click", function(e) {
  // if the chrono is running
  if (btnLeft.classList[1] === "start") {
    chronometer.startClick();
    toggleBtnClasses();
    intervalMin = setInterval(printMinutes, 1000);
    intervalSec = setInterval(printSeconds, 1000);
  } else if (btnLeft.classList[1] === "stop") {
    chronometer.stopClick();
    toggleBtnClasses();
    clearInterval(intervalMin);
    clearInterval(intervalSec);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function(e) {
  if (btnRight.classList[1] === "split") {
    let minutesAtSplit = minDec.innerText + minUni.innerText;
    let secondsAtSplit = secDec.innerText + secUni.innerText;
    let timeAtSplit = minutesAtSplit + ":" + secondsAtSplit;
    printSplit(timeAtSplit);
  }

  if (btnRight.classList[1] === "reset" && btnLeft.classList[1] === "start") {
    // clear all list elements
    document.getElementById("splits").innerHTML = "";
    chronometer.stopClick();
    chronometer.currentTime = 0;
    minDec.innerText = "0";
    minUni.innerText = "0";
    secDec.innerText = "0";
    secUni.innerText = "0";
  }
});
