const chronometer = new Chronometer();

console.log(chronometer);
console.log(chronometer.currentTime);

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
  minUni.textContent = "";
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  secUni.textContent = "";
  secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds());
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
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.className === "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.textContent = "STOP";
    btnRight.className = "btn split";
    btnRight.textContent = "SPLIT";
    chronometer.startClick(printTime);
  } else {
    btnLeft.className = "btn start";
    btnLeft.textContent = "START";
    btnRight.className = "btn reset";
    btnRight.textContent = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.className === "btn split") {
    printSplit();
  } else {
    clearSplits();
    chronometer.stopClick();
    chronometer.resetClick();
    printTime();
  }
});
