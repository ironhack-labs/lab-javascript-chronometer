const chronometer = new Chronometer();
let intervalPrint;

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
  secUni.innerHTML = printSeconds()[1];
  secDec.innerHTML = printSeconds()[0];
  minUni.innerHTML = printMinutes()[1];
  minDec.innerHTML = printMinutes()[0];
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const timeMark = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`;
  const newLi = document.createElement("li");
  newLi.textContent = timeMark;
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  chronometer.stopClick();
  clearInterval(intervalPrint);
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.startClick();
  intervalPrint = setInterval(printTime, 1000);
}

function setResetBtn() {
  chronometer.currentTime = 0;
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("split");

  if (btnLeft.classList.contains("stop")) {
    setStartBtn();
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
  } else {
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("split")) {
    printSplit();
  } else {
    clearSplits();
    setResetBtn();
  }
});
