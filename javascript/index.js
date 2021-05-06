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
}

function printMinutes() {
  if (chronometer.currentTime < 600) {
    minDec.innerText = 0;
    minUni.innerText = chronometer.getMinutes();
  } else {
    let time = chronometer.getMinutes().toString();
    let firstEl = time.charAt(0);
    let secondEl = time.charAt(1);
    minDec.innerHTML = Number(firstEl);
    minUni.innerHTML = Number(secondEl);
  }
}

function printSeconds() {
  if (chronometer.currentTime < 10) {
    secDec.innerText = 0;
    secUni.innerText = chronometer.getSeconds();
  } else {
    let time = chronometer.getSeconds().toString();
    let firstEl = time.charAt(0);
    let secondEl = time.charAt(1);
    secDec.innerHTML = Number(firstEl);
    secUni.innerHTML = Number(secondEl);
  }
}
// ==> BONUS
function printMilliseconds() {
  if (chronometer.currentTime * 100 < 10) {
    milDec.innerText = 0;
    milUni.innerText = chronometer.currentTime;
  } else if (chronometer.currentTime * 100 <= 99) {
    let time = chronometer.currentTime.toString();
    let firstEl = time.charAt(0);
    let secondEl = time.charAt(1);
    milDec.innerHTML = Number(firstEl);
    milUni.innerHTML = Number(secondEl);
  } else {
    let time = ((chronometer.currentTime * 100) % 100).toString();
    let firstEl = time.charAt(0);
    let secondEl = time.charAt(1);
    milDec.innerHTML = Number(firstEl);
    milUni.innerHTML = Number(secondEl);
  }
}

function printSplit() {
  const splitLi = document.createElement("li");
  splitLi.classList.add("splits");
  splitLi.innerText = chronometer.splitClick();
  const splitOl = document.getElementById("splits");
  splitOl.append(splitLi);
}

function clearSplits() {
  //splitLi.class.remove("splits");
}

function setStopBtn() {
  btnLeft.classList.replace("start", "stop");
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.classList.replace("reset", "split");
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.replace("stop", "start");
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.classList.replace("split", "reset");
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setResetBtn();
    setStartBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerText === "RESET") {
    chronometer.resetClick();
    chronometer.currentTime = 0;
    minDec.innerText = 0;
    minUni.innerText = 0;
    secDec.innerText = 0;
    secUni.innerText = 0;
    //chronometer.clearSplits();
  } else {
    chronometer.splitClick();
    printSplit();
  }
});
