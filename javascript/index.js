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
  let minutes = chronometer.splitClick();
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.splitClick();
  secDec.innerHTML = seconds[3];
  secUni.innerHTML = seconds[4];
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.splitClick();
  milDec.innerHTML = milliseconds[6];
  milUni.innerHTML = milliseconds[7];
}

function printSplit() {
  let li = document.createElement("li");
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  let li = document.querySelectorAll("li");
  li.innerHTML = chronometer.resetClick();
  for (let i = 0; i <= li.length - 1; i++) {
    splits.removeChild(li[i]);
  }
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET";
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
  chronometer.startClick(printTime);
}

function setResetBtn() {
  clearSplits();
  secUni.innerHTML = chronometer.resetClick();
  secDec.innerHTML = chronometer.resetClick();
  minDec.innerHTML = chronometer.resetClick();
  minUni.innerHTML = chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  btnLeft.onclick = function () {
    if (btnLeft.innerHTML === "START") {
      setStartBtn();
    } else {
      setStopBtn();
    }
  };
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  btnRight.onclick = function () {
    if (btnRight.innerHTML === "SPLIT") {
      setSplitBtn();
    } else {
      setResetBtn();
    }
  };
});
