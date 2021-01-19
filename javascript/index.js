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

// create list for split times

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minDec.textContent = Math.floor(chronometer.getMinutes() / 10);
  minUni.textContent = chronometer.getMinutes() % 10;
}

function printSeconds() {
  secDec.textContent = Math.floor(chronometer.getSeconds() / 10);
  secUni.textContent = chronometer.getSeconds() % 10;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitList = document.querySelector("#splits");
  const splitItem = document.createElement("li");
  splitItem.innerHTML = chronometer.splitClick();
  splitList.appendChild(splitItem);
}

function clearSplits() {
  const splitList = document.querySelector("#splits");
  console.log("we arrived at clearSplits!!");
  chronometer.currentTime = 0;
  printTime();
  splitList.innerHTML = "";
}

function setStopBtn() {
  // code inside the btnLeft..
}

function setSplitBtn() {
  // code inside the btnRight..
}

function setStartBtn() {
  // code inside the btnLeft..
}

function setResetBtn() {
  //  code inside the btnRight.
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList == "btn start") {
    btnLeft.classList = "btn stop";
    btnLeft.textContent = "STOP";
    chronometer.startClick(() => null);
  } else {
    btnLeft.classList = "btn start";
    btnLeft.textContent = "START";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList == "btn reset") {
    btnRight.classList = "btn split";
    btnRight.textContent = "SPLIT";
    if (btnLeft.classList == "btn start") {
      clearSplits();
      return;
    }
    printSplit();
  } else {
    btnRight.classList = "btn reset";
    btnRight.textContent = "RESET";
  }
});
