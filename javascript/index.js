const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {}

function printMinutes() {
  var min = chronometer.twoDigitsNumber(chronometer.getMinutes());

  min = min.split("");
  minDec.innerText = min[0];
  minUni.innerText = min[1];
  return min;
}

function printSeconds() {
  var sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  sec = sec.split("");
  secDec.innerText = sec[0];
  secUni.innerText = sec[1];
  return sec;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  if ((btnRight.innerText = "SPLIT")) {
    const li = document.createElement("li");
    li.innerHTML = chronometer.splitClick();
    splits.appendChild(li);
  }
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.innerText = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", (e) => {
  if (btnLeft.innerText === "START") {
    chronometer.startClick();

    setStopBtn();
    setSplitBtn();
  } else if (btnLeft.innerText === "STOP") {
    chronometer.stopClick();
    setResetBtn();
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function () {
  if (btnRight.innerText === "RESET") {
    chronometer.resetClick();
    clearSplits();
  } else printSplit();
});
