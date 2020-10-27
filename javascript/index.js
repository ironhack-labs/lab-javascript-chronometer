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
  printMilliseconds();
}
function printMinutes() {
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}
function printSeconds() {
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}
// ==> BONUS
function printMilliseconds() {
  milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1];
  milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0];
}

function printSplit(timefunc) {
  // ... your code goes here
  //guilherme leonardo
  const li = document.createElement("li");
  li.innerText = timefunc;
  splits.appendChild(li);
}
function clearSplits() {
  // ... your code goes here
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
  // ... your code goes here
  minUni.innerText = 0;
  minDec.innerText = 0;
  secUni.innerText = 0;
  secDec.innerText = 0;
  milUni.innerText = 0;
  milDec.innerText = 0;
  splits.innerHTML = "";
}
// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  if (btnLeft.innerText === "START") {
    chronometer.startClick(printTime);
    btnLeft.classList.toggle("stop");
    btnLeft.classList.toggle("start");
    btnLeft.innerText = "STOP";
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    btnRight.innerText = "SPLIT";
  } else {
    chronometer.stopClick();
    btnLeft.classList.toggle("stop");
    btnLeft.classList.toggle("start");
    btnLeft.innerText = "START";
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    btnRight.innerText = "RESET";
  }
});
// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  if (btnLeft.innerText === "START") {
    chronometer.resetClick();
    setResetBtn();
  } else {
    printSplit(chronometer.splitClick());
  }
});
