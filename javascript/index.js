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
  printMiliseconds();
}

function printMinutes() {
  let time = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let firstEl = time.charAt(0);
  let secondEl = time.charAt(1);
  minDec.innerText = firstEl;
  minUni.innerText = secondEl;
}

function printSeconds() {
  let time = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let firstEl = time.charAt(0);
  let secondEl = time.charAt(1);
  secDec.innerText = firstEl;
  secUni.innerText = secondEl;
}

// ==> BONUS
function printMiliseconds() {
  let time = chronometer.twoDigitsNumber(chronometer.getMilisenconds());
  let firstEl = time.charAt(0);
  let secondEl = time.charAt(1);
  milDec.innerText = firstEl;
  milUni.innerText = secondEl;
}

function printSplit() {
  const splitLi = document.createElement("li");
  splitLi.classList.add("split");
  splitLi.innerText = chronometer.splitClick();
  const splitOl = document.getElementById("splits");
  splitOl.append(splitLi);
}

function clearSplits() {
  const splitClear = document.getElementById("splits");
  while (splitClear.firstChild) {
    splitClear.removeChild(splitClear.firstChild);
  }
}

function setStopBtn() {
  btnLeft.classList.replace("start", "stop");
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.classList.replace("reset", "split");
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.replace("stop", "start");
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.classList.replace("split", "reset");
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setResetBtn();
    setStartBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerText === "RESET") {
    chronometer.resetClick();
    minDec.innerText = 0;
    minUni.innerText = 0;
    secDec.innerText = 0;
    secUni.innerText = 0;
    milDec.innerText = 0;
    milUni.innerText = 0;
    clearSplits();
  } else {
    chronometer.splitClick();
    printSplit();
  }
});
