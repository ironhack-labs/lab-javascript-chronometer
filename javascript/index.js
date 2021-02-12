const chronometer = new Chronometer();
const newChronometer = new Chronometer();

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

function printTime() {
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here

  let mins = newChronometer
    .twoDigitsNumber(newChronometer.getMinutes())
    .split("");
  minDec.innerText = mins[0];
  minUni.innerText = mins[1];
}

function printSeconds() {
  // ... your code goes here
  let secs = newChronometer
    .twoDigitsNumber(newChronometer.getSeconds())
    .split("");

  secDec.innerText = secs[0];
  secUni.innerText = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let mSecs = newChronometer
    .twoDigitsNumber(newChronometer.getMilliseconds())
    .split("");
  milDec.innerText = mSecs[0];
  milUni.innerText = mSecs[1];
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  if (btnLeft.classList.contains("stop")) newChronometer.stopClick();
}

function setSplitBtn() {
  // ... your code goes here
  const li = document.createElement("li");
  li.innerText = newChronometer.splitClick();
  splits.appendChild(li);
}

function setStartBtn() {
  // ... your code goes here
  if (btnLeft.classList.contains("start")) newChronometer.startClick(printTime);
}

function setResetBtn() {
  // ... your code goes here
  newChronometer.resetClick();
  minDec.innerText = 0;
  minUni.innerText = 0;
  secDec.innerText = 0;
  secUni.innerText = 0;
  milDec.innerText = 0;
  milUni.innerText = 0;
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  setStartBtn();
  setStopBtn();

  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");

  if (btnLeft.classList.contains("stop")) {
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
  } else {
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  if (btnRight.classList.contains("reset")) {
    setResetBtn();
    clearSplits();
  } else {
    setSplitBtn();
  }
});

