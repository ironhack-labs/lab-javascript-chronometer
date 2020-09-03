import { Chronometer } from "./chronometer.js";
const chronometer = new Chronometer();
chronometer.currentTime = 0;

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
  printMilliSeconds();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes.charAt(0);
  minUni.innerText = minutes.charAt(1);
  // console.log("Min ==>", minutes);
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  //console.log("Sec ==>", seconds);
  secDec.innerText = seconds.charAt(0);
  secUni.innerText = seconds.charAt(1);
}

function printMilliSeconds() {
  const milleseconds = chronometer.twoDigitsNumber(
    chronometer.getMilliSeconds()
  );
  //console.log("Sec ==>", seconds);
  milDec.innerText = milleseconds.charAt(0);
  milUni.innerText = milleseconds.charAt(1);
}

function printSplit() {
  splits.innerHTML += `<li> ${chronometer.splitClick()} </li>`;
}

function clearSplits() {
  [...splits.children].forEach((child) => {
    child.remove();
  });
}

function setStopBtn() {
  if (btnLeft.classList.contains("stop")) {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerText = "START";
  }
}

function setSplitBtn() {
  if (btnLeft.classList.contains("start")) {
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerText = "SPLIT";
  }
}

function setStartBtn() {
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerText = "STOP";
  }
}
function setResetBtn() {
  if (btnLeft.classList.contains("stop")) {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerText = "RESET";
  }
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    setSplitBtn();
    setStartBtn();
    chronometer.startClick(printTime);
    // console.log(chronometer.intervalId);
  } else {
    setResetBtn();
    setStopBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("split")) {
    printSplit();
  } else {
    setSplitBtn();
    chronometer.resetClick();
    chronometer.currentTime = 0;
    printTime();
    clearSplits();
  }
});
