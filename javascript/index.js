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
}

function printMinutes() {
  setInterval(() => {
    minUni.textContent = chronometer
      .twoDigitsNumber(chronometer.getMinutes())
      .slice(1);
    minDec.textContent = chronometer
      .twoDigitsNumber(chronometer.getMinutes())
      .slice(0, 1);
  }, 1000);
}

function printSeconds() {
  setInterval(() => {
    secUni.textContent = chronometer
      .twoDigitsNumber(chronometer.getSeconds())
      .slice(1);
    secDec.textContent = chronometer
      .twoDigitsNumber(chronometer.getSeconds())
      .slice(0, 1);
  }, 1000);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.replace("start", "stop");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.replace("reset", "split");
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.replace("stop", "start");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.replace("split", "reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  printTime();
  if (btnLeft.innerHTML == "START") {
    chronometer.startClick();
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    btnLeft.classList.replace("start", "stop");
    btnRight.classList.replace("reset", "split");
  } else {
    chronometer.stopClick();
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    btnLeft.classList.replace("stop", "start");
    btnRight.classList.replace("split", "reset");
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerHTML === "RESET") {
    chronometer.resetClick();
    clearSplits();
  } else {
    chronometer.splitClick();
    setSplitBtn();
    printSplit();
  }
});
