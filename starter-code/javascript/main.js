var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let min = chronometer.getMinutes();
  if (min >= 10) {
    minDec.innerText = Math.floor(min / 10);
  }
  minUni.innerText = min % 10;
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  if (sec >= 10) {
    secDec.innerText = Math.floor(sec / 10);
  }
  secUni.innerText = sec % 10;
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  let classesLeft = btnLeft.getAttribute("class").split(" ");
  let index = classesLeft.indexOf("start");
  classesLeft[index] = "stop";
  btnLeft.innerText = "STOP";
  btnLeft.className = classesLeft.join(" ");

  setSplitBtn();
}

function setSplitBtn() {
  let classesRight = btnRight.getAttribute("class").split(" ");
  if (classesRight.includes("reset")) {
    let indexRight = classesRight.indexOf("reset");
    classesRight[indexRight] = "split";
    btnRight.innerText = "SPLIT";
  }
  btnRight.className = classesRight.join(" ");
}

function setStartBtn() {
  let classesLeft = btnLeft.getAttribute("class").split(" ");
  let index = classesLeft.indexOf("stop");
  classesLeft[index] = "start";
  btnLeft.innerText = "START";
  btnLeft.className = classesLeft.join(" ");

  setResetBtn();
}

function setResetBtn() {
  let classesRight = btnRight.getAttribute("class").split(" ");
  if (classesRight.includes("split")) {
    let indexRight = classesRight.indexOf("split");
    classesRight[indexRight] = "reset";
    btnRight.innerText = "RESET";
  }
  btnRight.className = classesRight.join(" ");
}

// Start/Stop Button
btnLeft.addEventListener("click", function(e) {
  let classesLeft = btnLeft.getAttribute("class").split(" ");
  let classesRight = btnRight.getAttribute("class").split(" ");
  if (classesLeft.includes("start")) {
    setStopBtn();
  } else if (classesLeft.includes("stop")) {
    setStartBtn();
  }

  chronometer.startClick();
});

// Reset/Split Button
btnRight.addEventListener("click", function(e) {});
