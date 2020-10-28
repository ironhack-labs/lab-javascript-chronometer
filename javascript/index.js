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
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  //... your code goes here
  let milliSec = chronometer.twoDigitsNumber(chronometer.currentMilliSec);

  milDec.innerHTML = milliSec[0];
  milUni.innerHTML = milliSec[1];
}

function printSplit() {
  // ... your code goes here
  const li = document.createElement("li");
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  chronometer.resetClick();
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  splits.remove();
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET";
}

btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime, printMilliseconds);
    setStopBtn();
    setSplitBtn();
    printMilliseconds();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    clearSplits();
    printMilliseconds();
  } else {
    printSplit();
  }
});
