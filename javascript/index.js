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
  let min = chronometer.getMinutes();
  if (min > 9) {
    let minString = String(min).split("");
    console.log(minString);
    minUni.innerText = minString[1];
    minDec.innerText = minString[0];
  } else {
    minUni.innerText = min;
    minDec.innerText = 0;
  }
}

function printSeconds() {
  let sec = chronometer.getSeconds();

  if (sec > 9) {
    let secString = String(sec).split("");
    console.log(secString);
    secUni.innerText = secString[1];
    secDec.innerText = secString[0];
  } else if (sec == 0) {
    secUni.innerText = sec;
    secDec.innerText = 0;
  } else {
    secUni.innerText = sec;
  }
}

// ==> BONUS
function printMilliseconds() {
  let milSec = chronometer.getMil();

  if (milSec > 9) {
    console.log(milSec);
    let milSecString = String(milSec).split("");
    milUni.innerText = milSecString[1];
    milDec.innerText = milSecString[0];
  } else {``
    milSec;
  }
}

function printSplit() {
  let ol = document.querySelector("#splits");
  let li = document.createElement("li");
  let splitClock = chronometer.splitClick();

  console.log(splitClock);
  li.classList.add("split-item");
  li.innerHTML = `${splitClock}`;
  ol.appendChild(li);
}

function clearSplits() {
  let list = document.querySelectorAll(".split-item");

  list.forEach((item) => {
    item.parentNode.removeChild(item);
  });

  chronometer.currentTime = 0;
  chronometer.currentMilTime = 0;

  minUni.innerText = 0;
  minDec.innerText = 0;
  secUni.innerText = 0;
  secDec.innerText = 0;
  milUni.innerText = 0;
  milDec.innerText = 0;
}

function setStopBtn() {
  btnLeft.classList.add("stop");
  btnLeft.innerText = "STOP";

  chronometer.startClick(printTime);
}

function setSplitBtn() {
  btnRight.classList.add("split");
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.innerText = "RESET";

  chronometer.stopClick();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (!btnLeft.className.includes("stop")) {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.className.includes("split")) {
    printSplit();
  }

  if (!btnLeft.className.includes("stop")) {
    clearSplits();
  }
});
