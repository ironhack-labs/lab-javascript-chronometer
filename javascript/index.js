const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
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
  printMinutes()
  printSeconds()
  return
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let split = document.createElement("li");
  split.innerHTML = chronometer.splitClick();
  splits.appendChild(split)
}

function clearSplits() {
  splits.innerHTML = " ";
}

function setStopBtn() {

  //btnLeft.setAttribute("id", "bntLeft");
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove('start')
  btnLeft.classList.add('stop')
  return btnLeft
}

function setSplitBtn() {
  //btnRight.setAttribute("id", "btnRight");
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  return btnRight
}

function setStartBtn() {
  //btnLeft.setAttribute("id", "btnLeft");
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove('stop')
  btnLeft.classList.add('start')
  return btnLeft
}

function setResetBtn() {
  //btnRight.setAttribute("id", "btnRight");
  btnRight.innerHTML("RESET");
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  return btnRight
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") {
    chronometer.startClick();
    let interval = setinterval(() =>
      printTime(), 1000)

    setStopBtn()
    setSplitBtn();
  } else {
    chronometer.stopClick();
    clearInterval(interval)
    setStartBtn()
    setResetBtn();

  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML !== "RESET") {
    chronometer.clearSplits();
    printSplit();
  } else {
    chronometer.resetClick();
    printTime();
    clearSplits();
  }
});

