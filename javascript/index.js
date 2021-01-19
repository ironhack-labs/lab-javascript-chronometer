const chronometer = new Chronometer();
console.log(chronometer);
// get the buttons:

// get the DOM elements that will serve us to display the time:

let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// var btnLeft = document.getElementById("btnLeft");

function printTime() {
  printMinutes();
  printSeconds();

  // minDec.innerHTML = printMinutes()[0];
  // minUni.innerHTML = printMinutes()[1];
  // secDec.innerHTML = printSeconds()[0];
  // secUni.innerHTML = printSeconds()[1];
}
function printMinutes() {
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}
/*
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
*/
function printSplit() {
  let li = document.createElement("li");
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime);
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
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
