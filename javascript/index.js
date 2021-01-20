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

let totalTime = document.createElement("span");

function printTime() {
  return setInterval(() => {
    totalTime =
      chronometer.twoDigitsNumber(chronometer.getMinutes()) +
      chronometer.twoDigitsNumber(chronometer.getSeconds());
    console.log(totalTime);
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  minDec.innerHTML = totalTime[0];
  minUni.innerHTML = totalTime[1];
}

function printSeconds() {
  secDec.innerHTML = totalTime[2];
  secUni.innerHTML = totalTime[3];
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
  // ... your code goes here
  chronometer.stopClick();
}

function setSplitBtn() {
  // ... your code goes here
  let splitTime = chronometer.splitClick();
  splits.innerHTML += `<li>${splitTime}</li>`;
}

function setStartBtn() {
  // ... your code goes here
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  // ... your code goes here
  chronometer.resetClick();
  splits.innerHTML = "";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.getAttribute("class") === "btn start") {
    btnLeft.setAttribute("class", "btn stop");
    btnRight.setAttribute("class", "btn split");
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    setStartBtn();
  } else {
    btnLeft.setAttribute("class", "btn start");
    btnRight.setAttribute("class", "btn reset");
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.getAttribute("class") === "btn reset") {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
