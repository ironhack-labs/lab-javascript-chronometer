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
  var minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = `${minutes[0]}`;
  minUni.textContent = `${minutes[1]}`;
}

function printSeconds() {
  var minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = `${minutes[0]}`;
  minUni.textContent = `${minutes[1]}`;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  var time = chronometer.splitClick();
  splits.innerHTML += `<li> ${time} </li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.textContent = `STOP`;
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setSplitBtn() {
  btnRight.textContent = `SPLIT`;
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  btnLeft.textContent = `START`;
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
}

function setResetBtn() {
  btnRight.textContent = `RESET`;
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime());
    setStopBtn();
    setSplitBtn();
    
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("split")) {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  }
});
