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
  //minDec.innerHTML = printMinutes();
  //minUni.innerHTML = printMinutes();
  printSeconds();
  printMinutes();
  //printMilliseconds();
}
function printMinutes() {
  const twodigit = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = twodigit[0];
  minUni.innerHTML = twodigit[1];
}
function printSeconds() {
  const twodigit = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = twodigit[0];
  secUni.innerHTML = twodigit[1];
}
// ==> BONUS
function printMilliseconds() {
  milUni.innerHTML = chronometer.getMiliSeconds();
  // ... your code goes here
}
function printSplit() {
  const elem = document.createElement("li");
  elem.innerHTML =
    chronometer.twoDigitsNumber(chronometer.getMinutes()) +
    ":" +
    chronometer.twoDigitsNumber(chronometer.getSeconds()) +
    "<br>";
  splits.appendChild(elem);
}
function clearSplits() {
  splits.innerHTML = "";
  // ... your code goes here
}
function setStopBtn() {
  // ... your code goes here
}
function setSplitBtn() {
  // ... your code goes here
}
function setStartBtn() {
  // ... your code goes here
}
function setResetBtn() {
  // ... your code goes here
}
setInterval(() => {
  printTime();
}, 100);
// Start/Stop Button
btnLeft.addEventListener("click", () => {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
  if (btnLeft.classList.contains("start")) {
    btnLeft.innerHTML = "START";
    chronometer.stopClick();
  } else if (btnLeft.classList.contains("stop")) {
    btnLeft.innerHTML = "STOP";
    chronometer.startClick();
  }
  if (btnRight.classList.contains("reset")) {
    btnRight.innerHTML = "RESET";
  } else {
    btnRight.innerHTML = "SPLIT";
  }
});
// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    btnRight.innerHTML = "RESET";
    chronometer.resetClick();
    printTime();
    clearSplits();
  } else if (btnRight.classList.contains("split")) {
    btnRight.innerHTML = "SPLIT";
    printSplit();
  }
});
