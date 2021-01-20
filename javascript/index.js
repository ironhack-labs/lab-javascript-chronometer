const chronometer = new Chronometer();

//enumerators:
//com nome maiusculo, por convenção deve ser mantida
const BTN_TEXT_STOP = "STOP";

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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getSeconds());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printSplit() {
  const li = document.createElement("li");
  li.innerText = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  chronometer.resetClick();
  printTime();
  splits.innerHTML = "";
}

// BUTTONS TEXT AND COLOR
//Use toggle helps lowering the possibility of bugs - the computer controls if it's add or remove
//Stop button - ok
function setStopBtn(btnText) {
  btnLeft.innerText = btnText;
  btnLeft.classList.toggle("stop"); //btnLeft.classList.add("")
  btnLeft.classList.toggle("start"); //btnLeft.classList.remove("")
}

//Split button - ok
function setSplitBtn(btnText) {
  btnLeft.innerText = btnText;
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

//Start button - ok
function setStartBtn() {}

//Reset button - ok
function setResetBtn() {
  chronometer.resetClick();
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  const isChronometerRunning = btnLeft.innerText === BTN_TEXT_STOP;
  if (isChronometerRunning) {
    setStopBtn("START");
    setSplitBtn("RESET");
    chronometer.stopClick();
  } else {
    setStopBtn("STOP");
    setSplitBtn("SPLIT");
    chronometer.stopClick(printTime);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  const isChronometerRunning = btnLeft.innerText === BTN_TEXT_STOP;
  if (isChronometerRunning) {
    printSplit();
  } else {
    setResetBtn();
  }
});
