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
  setInterval(() => {
    const min = chronometer.getMinutes();
    const sec = chronometer.getSeconds();
    minDec.textContent = min.toString()[0];
    minUni.textContent = min.toString()[1];
    secDec.textContent = sec.toString()[0];
    secUni.textContent = sec.toString()[1];
  }, 500);
}
function printMinutes() {
  // ... your code goes here
}
function printSeconds() {
  // ... your code goes here
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
function printSplit() {
  const splits = document.querySelector("#splits");
  const newLi = document.createElement("li");
  const min = chronometer.getMinutes();
  const sec = chronometer.getSeconds();
  newLi.textContent = min + ":" + sec;
  splits.appendChild(newLi);
}
function clearSplits() {
  chronometer.currentTime = 0;
  const splits = document.querySelector("#splits");
  while (splits.firstChild) {
    splits.removeChild(splits.lastChild);
  }
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
// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.textContent === "START") {
    btnLeft.textContent = "STOP";
    btnLeft.classList.add("class", "stop");
    btnRight.textContent = "SPLIT";
    btnRight.classList.add("class", "split");
    chronometer.startClick();
    printTime();
  } else {
    btnLeft.textContent = "START";
    btnLeft.classList.remove("class", "stop");
    btnRight.textContent = "RESET";
    btnRight.classList.remove("class", "split");
    chronometer.stopClick();
  }
});
// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.textContent === "SPLIT") {
    printSplit();
  } else {
    clearSplits();
  }
});
