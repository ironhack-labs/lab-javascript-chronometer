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
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 100);

  // ... your code goes here
}

function printMinutes() {
  const mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.textContent = mins[1];
  minDec.textContent = mins[0];
}

function printSeconds() {
  // ... your code goes here
  const secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.textContent = secs[1];
  secDec.textContent = secs[0];
}

// ==> BONUS
//function printMilliseconds() {
// ... your code goes here
//const millis = chronometer.twoDigitsNumber(chronometer.getSeconds() / 1000);
//milUni.textContent = millis[1];
//milDec.textContent = millis[0];
//}

function printSplit() {
  // ... your code goes here
  var Stime = chronometer.splitClick();
  splits.innerHTML += `<li> ${Stime} </li>`;
}

function clearSplits() {
  splits.innerHTML = "";
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.textContent = `STOP`;
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");

  // ... your code goes here
}

function setSplitBtn() {
  btnRight.textContent = `SPLIT`;
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.textContent = `START`;
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");

  // ... your code goes here
}

function setResetBtn() {
  btnRight.textContent = `RESET`;
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick(printTime);
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
  // ... your code goes here
});
