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

function printTime() {}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  setInterval(() => {
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
  }, 1000);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  switch (btnLeft.className) {
    case "btn start":
      btnLeft.classList.remove("start");
      btnLeft.classList.add("stop");
      btnLeft.innerHTML = "STOP";
      btnRight.classList.remove("reset");
      btnRight.classList.add("split");
      btnRight.innerHTML = "SPLIT";
      setStartBtn();
      printSeconds();
      break;
    case "btn stop":
      btnLeft.classList.remove("stop");
      btnLeft.classList.add("start");
      btnLeft.innerHTML = "START";
      btnRight.classList.remove("split");
      btnRight.classList.add("reset");
      btnRight.innerHTML = "RESET";
      setStopBtn();
      break;
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {});
