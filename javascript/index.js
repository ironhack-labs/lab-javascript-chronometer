const chrono = new Chronometer();

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
    printSeconds();
  }, -1000);
}

function printMinutes() {
  let firstDigit = chrono.twoDigitsNumber(chrono.getMinutes());
  let secondDigit = chrono.twoDigitsNumber(chrono.getMinutes());
  minDec.textContent = firstDigit.slice(0, 1);
  minUni.textContent = secondDigit.slice(1, 2);
}

function printSeconds() {
  let firstDigit = chrono.twoDigitsNumber(chrono.getSeconds());
  let secondDigit = chrono.twoDigitsNumber(chrono.getSeconds());
  secDec.textContent = firstDigit.slice(0, 1);
  secUni.textContent = secondDigit.slice(1, 2);
}

function printMilliseconds() {}

function printSplit() {
  if (btnRight.textContent === "SPLIT") {
    const li = document.createElement("li");
    li.textContent = `${chrono.splitClick()}`;
    splits.appendChild(li);
  }
}

function clearSplits() {
  if (btnRight.textContent === "RESET") {
    splits.innerHTML = "";
    minDec.textContent = chrono.resetClick();
    minUni.textContent = chrono.resetClick();
    secDec.textContent = chrono.resetClick();
    secUni.textContent = chrono.resetClick();
  }
}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
  if (btnLeft.textContent === "START") {
    btnLeft.textContent = "STOP";
    btnRight.classList.toggle("split");
    btnRight.classList.toggle("reset");
    btnRight.textContent = "SPLIT";
    chrono.startClick(printTime());
  } else {
    btnLeft.textContent = "START";
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    btnRight.textContent = "RESET";
    chrono.stopClick(printTime());
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
