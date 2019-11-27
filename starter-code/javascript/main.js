var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
let split_list = document.getElementById("splits");
let intervalID;

function printTime() {
  printMinutes();
  printSeconds();
  //printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
}

function printMilliseconds() {
  milDec.textContent = 0;
  milUni.textContent = 0;
}

function printSplit() {
  let item_split_list = document.createElement("li");
  item_split_list.textContent =
    chronometer.twoDigitsNumber(chronometer.getMinutes()) +
    ":" +
    chronometer.twoDigitsNumber(chronometer.getSeconds());
  split_list.appendChild(item_split_list);
}

function clearSplits() {}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.textContent = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.className === "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    intervalID = setInterval(() => {
      printTime();
    }, 1000);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    clearInterval(intervalID);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.className === "btn split") {
    printSplit();
  } else {
    chronometer.resetClick();
    printTime();
  }
});
