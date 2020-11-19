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
    printMinutes();
    // console.log(printMinutes);
    printSeconds();
  }, -1000);
}

function printMinutes() {
  // get the minutes from the chrono.js
  let oneMinute = chronometer.getMinutes();
  let printing = chronometer.twoDigitsNumber(oneMinute);
  // print it
  minDec.innerHTML = printing[0];
  minUni.innerHTML = printing[1];
}

function printSeconds() {
  let oneSecond = chronometer.getSeconds();
  let printSeconds = chronometer.twoDigitsNumber(oneSecond);
  secDec.innerHTML = printSeconds[0];
  secUni.innerHTML = printSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const cSplit = chronometer.splitClick(printTime());
  splits.innerHTML += `<li>${cSplit}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.add("stop");
    btnLeft.classList.remove("start");

    btnLeft.innerHTML = "STOP";

    chronometer.startClick(printTime());

    setStopBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    btnRight.classList.remove("reset");

    btnRight.classList.add("split");

    btnRight.classList.remove("reset");

    btnRight.innerHTML = "SPLIT";
    chronometer.resetClick();
    setSplitBtn();
  } else {
    chronometer.splitClick();
    setResetBtn();
    printSplit();
  }
});
