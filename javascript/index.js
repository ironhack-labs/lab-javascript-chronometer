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
  setInterval(function () {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  minDec.innerHTML = chronometer.dec(
    chronometer.twoDigitsNumber(chronometer.getMinutes())
  );
  minUni.innerHTML = chronometer.uni(
    chronometer.twoDigitsNumber(chronometer.getMinutes())
  );
}

function printSeconds() {
  secDec.innerHTML = chronometer.dec(
    chronometer.twoDigitsNumber(chronometer.getSeconds())
  );
  secUni.innerHTML = chronometer.uni(
    chronometer.twoDigitsNumber(chronometer.getSeconds())
  );
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.dec(
    chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  );
  milUni.innerHTML = chronometer.uni(
    chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  );
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML = "START";
  btnRight.innerHTML = "RESET";
  btnLeft.className = "btn start";
  btnRight.className = "btn reset";
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
  btnLeft.className = "btn stop";
  btnRight.className = "btn split";
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerHTML === "START") {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerHTML === "SPLIT") {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
