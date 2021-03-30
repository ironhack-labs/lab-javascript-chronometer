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

let printIntervalId = 0;

function printTime() {
  printIntervalId = setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 1);
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = min.charAt(0);
  minUni.innerHTML = min.charAt(1);
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = sec.charAt(0);
  secUni.innerHTML = sec.charAt(1);
}

// ==> BONUS
function printMilliseconds() {
  let miliSeconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.innerHTML = miliSeconds.charAt(0);
  milUni.innerHTML = miliSeconds.charAt(1);
}

function printSplit() {
  let listEl = document.createElement("li");
  listEl.innerHTML = chronometer.splitClick();
  splits.appendChild(listEl);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if ([...btnLeft.classList].includes("start")) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else if ([...btnLeft.classList].includes("stop")) {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if ([...btnRight.classList].includes("reset")) {
    clearSplits();
    chronometer.resetClick();
    clearInterval(printIntervalId);
  } else if ([...btnRight.classList].includes("split")) {
    printSplit();
  }
});
