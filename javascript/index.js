const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
console.log(btnLeft);
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes.slice(0, 1);
  minUni.innerHTML = minutes.slice(-1);
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds.slice(0, 1);
  secUni.innerHTML = seconds.slice(-1);
}

// ==> BONUS
function printMilliseconds() {
  const milliSeconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.innerHTML = milliSeconds.slice(0, 1);
  milUni.innerHTML = milliSeconds.slice(-1);
}

function printSplit() {
  newSplit = document.createElement("li");
  newSplit.setAttribute("class", "split");
  splits.appendChild(newSplit);
  newSplit.innerHTML = chronometer.splitClick();
}

function clearSplits() {
  console.log("in clear splits");
  const toRemove = document.querySelectorAll(".split")
  toRemove.forEach((el) => {
    el.remove();
  })
}

function setStopBtn() {
  console.log("in stop btn");
  btnLeft.innerHTML = "STOP";
  setSplitBtn();
}

function setSplitBtn() {
  console.log("in split btn");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  console.log("in start btn");
  btnLeft.innerHTML = "START";
  setResetBtn();
}

function setResetBtn() {
  console.log("in reset btn");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime);
    setStopBtn();
  }
  else if (btnLeft.classList.contains("stop")) {
    chronometer.stopClick();
    setStartBtn();
  }
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
});

btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    printTime();
    clearSplits();
  }
  if (btnRight.classList.contains("split")) {
    printSplit();
    setSplitBtn();
  }
});
