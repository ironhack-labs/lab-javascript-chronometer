const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  chronometer.setTime();
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.minutes[0];
  minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.seconds[0];
  secUni.innerHTML = chronometer.seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.milliseconds[0];
  milUni.innerHTML = chronometer.milliseconds[1];
}

function printSplit() {
  var newLi = document.createElement("li");
  splitList.append(newLi);
  newLi.innerHTML = chronometer.splitClick();
}

function clearSplits() {
  splitList.innerHTML = null;
}

function setStopBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (this.classList.contains("start")) {
    setStartBtn();
    setSplitBtn();
    chronometer.startClick();
  } else {
    setStopBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (this.classList.contains("split")) {
    printSplit();
  } else {
    setResetBtn();
    clearSplits();
  }
});
