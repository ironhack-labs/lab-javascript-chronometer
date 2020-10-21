const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

function toggleClassesAndText() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
  } else {
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
  }
}

function toggleChronometerOn() {
  if (btnLeft.classList.contains("stop")) {
    chronometer.startClick();
  } else {
    chronometer.stopClick();
  }
}

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  if (btnRight.classList.contains("split")) {
    const newList = document.createElement("li");
    const mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
    const secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
    splits.appendChild(newList)
    newList.innerText = `${mins}:${secs}`;
  }
}

function printMinutes() {
  setInterval(() => {
    minUni.textContent = chronometer.getMinutes();
  }, 60*1000);
}

function printSeconds() {
  setInterval(() => {
    secUni.textContent = chronometer.getSeconds();
  }, 1000);
}

function clear() {
  if (btnRight.classList.contains('reset')) {
    chronometer.currentTime = 0;
    while (splits.firstChild) {
      splits.removeChild(splits.firstChild)
    }
  }
}

btnLeft.addEventListener("click", toggleClassesAndText);
btnLeft.addEventListener("click", toggleChronometerOn);
btnLeft.addEventListener("click", printMinutes);
btnLeft.addEventListener("click", printSeconds);
btnRight.addEventListener("click", printTime);
btnRight.addEventListener("click", clear);


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
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
});
