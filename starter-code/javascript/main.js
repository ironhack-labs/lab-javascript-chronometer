var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');



function printTime() {
  setInterval (() => {
    printSeconds();
    printMinutes();
  }, 300);
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let displayMinDec = Math.floor(minutes/10);
  let displayMinUni = minutes % 10;
  document.querySelector("#minDec").textContent = displayMinDec;
  document.querySelector("#minUni").textContent = displayMinUni;
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let displaySecDec = Math.floor(seconds/10);
  let displaySecUni = seconds % 10;
  document.querySelector("#secDec").textContent = displaySecDec;
  document.querySelector("#secUni").textContent = displaySecUni;
}

function printMilliseconds() {

}

function printSplit() {
  const newSplit = document.createElement("li");
  newSplit.textContent = chronometer.splitClick();
  const splitParent = document.getElementById("splits");
  splitParent.appendChild(newSplit);
}

function clearSplits() {
  document.getElementById("splits").innerHTML = "";
  chronometer.resetClick();
}

function setStopBtn() {
  btnLeft.textContent = "STOP";
  btnLeft.classList = "btn stop";
  chronometer.startClick();
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.classList = "btn split"
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.classList = "btn start";
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.textContent = "RESET";
  btnRight.classList = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (btnLeft.classList.contains("stop") && btnLeft.textContent === "STOP") {
    setStartBtn();
    setResetBtn();
  } else if (btnLeft.classList.contains("start") && btnLeft.textContent === "START") {
    setStopBtn();
    setSplitBtn();
    printTime();
  }
  console.log("click it to the left");
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains("split") && btnRight.textContent === "SPLIT") {
    printSplit();
  } else if (btnRight.classList.contains("reset") && btnRight.textContent === "RESET") {
    setSplitBtn();
    clearSplits()
  }
  console.log("click it to the right");
});

