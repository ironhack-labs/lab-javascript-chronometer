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

// create list for split times

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minDec.textContent = Math.floor(chronometer.getMinutes() / 10);
  minUni.textContent = chronometer.getMinutes() % 10;
}

function printSeconds() {
  secDec.textContent = Math.floor(chronometer.getSeconds() / 10);
  secUni.textContent = chronometer.getSeconds() % 10;
}

// ==> BONUS
function printMilliseconds() {
  // in the real world, these are `centiseconds` (SI measure)
  // I left the nomenclature at milliseconds for clarity in the lab
  const currentTimeCentiSeconds = chronometer.currentTimeMilliSeconds % 100;
  milDec.textContent = Math.floor(currentTimeCentiSeconds / 10);
  milUni.textContent = currentTimeCentiSeconds % 10;
  // console.log(milDec.textContent, milUni.textContent);
}

function printSplit() {
  const splitList = document.querySelector("#splits");
  const splitItem = document.createElement("li");
  str =
    chronometer.splitClick() +
    ":" +
    chronometer.twoDigitsNumber(chronometer.currentTimeMilliSeconds % 100);
  splitItem.innerHTML = str;
  splitList.appendChild(splitItem);
}

function clearSplits() {
  const splitList = document.querySelector("#splits");
  splitList.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList = "btn stop";
  btnLeft.textContent = "STOP";
}

function setSplitBtn() {
  btnRight.classList = "btn split";
  btnRight.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList = "btn start";
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.classList = "btn reset";
  btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList == "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
    chronometer.startClickMilliSeconds(printMilliseconds);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList == "btn split") {
    printSplit();
  } else {
    clearSplits();

    chronometer.currentTime = 0;
    printTime();

    chronometer.currentTimeMilliSeconds = 0;
    printMilliseconds();
  }
});
