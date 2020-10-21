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

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
  return;
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}

function printSplit() {
  return chronometer.splitClick();
}

function clearSplits() {
  document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML = "START";
  btnRight.innerHTML = "RESET";
  btnLeft.className = "btn start";
  btnRight.className = "btn reset";
  chronometer.stopClick();
}

function setSplitBtn() {
  let li = document.createElement("li");
  li.innerHTML = printSplit();
  document.getElementById("splits").append(li);
}

function setStartBtn() {
  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
  btnLeft.className = "btn stop";
  btnRight.className = "btn split";
  chronometer.startClick();
}

function setResetBtn() {
  clearSplits();
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerHTML === "START") {
    setStartBtn();
    interval = setInterval(() => printTime(), 1000);
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerHTML === "RESET") {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
