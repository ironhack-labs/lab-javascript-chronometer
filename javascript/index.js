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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = String(chronometer.getMinutes());
  if (minutes.length < 2) {
    minUni.innerHTML = minutes[0];
    minUni.innerHTML = "0";
  } else {
    minUni.innerHTML = minutes[1];
    minDec.innerHTML = minutes[0];
  }
}

function printSeconds() {
  let seconds = String(chronometer.getSeconds());
  if (seconds.length < 2) {
    secUni.innerHTML = seconds[0];
    secDec.innerHTML = "0";
  } else {
    secUni.innerHTML = seconds[1];
    secDec.innerHTML = seconds[0];
  }
}

// ==> BONUS
function printMilliseconds() {
  window.count = 0;
  window.miliInterval = setInterval(() => {
    window.count++;
    milUni.innerHTML = window.count;
  }, 10);

  setInterval(() => {
    window.count = 0;
  }, 1000);
}

function printSplit() {
  let newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerHTML = chronometer.splitClick() + ":" + window.count;
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime);
    printMilliseconds();

    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    clearInterval(window.miliInterval);
    milUni.innerHTML = window.count;
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    clearInterval(window.miliInterval);
    milUni.innerHTML = 0;

    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
