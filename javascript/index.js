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
  let interval3 = setInterval(() => {
    if (chronometer.getMinutes() >= 10) {
      minDec.style.display = "none";
    } else {
      minDec.style.display = "inline-block";
    }
    minUni.innerText = chronometer.getMinutes();
  }, 60000);
}

function printSeconds() {
  let interval2 = setInterval(() => {
    if (chronometer.getSeconds() >= 10) {
      secDec.style.display = "none";
      secUni.style.paddingRight = "40px";
    } else {
      secDec.style.display = "inline-block";
    }
    secUni.innerText = chronometer.getSeconds();
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
  clearInterval(chronometer.intervalId);
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
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.toggle("start");
    btnLeft.classList.toggle("stop");
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    chronometer.startClick();
    this.printSeconds();
    this.printMinutes();
  } else {
    btnLeft.classList.toggle("start");
    btnLeft.classList.toggle("stop");
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
    chronometer.stopClick();
    this.setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnLeft.classList.contains("stop")) {
    // split timer
  } else {
    clearInterval(interval2);
    chronometer.stopClick();
  }
});
