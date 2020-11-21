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
 minDec.innerHTML = printMinutes().split('')[0]
 minUni.innerHTML = printMinutes().split('')[1]
 secDec.innerHTML = printSeconds().split('')[0]
 secUni.innerHTML = printSeconds().split('')[1]
 milDec.innerHTML = printMilliSeconds().split('')[0]
 milUni.innerHTML = printMilliSeconds().split('')[1]
}

function printMinutes() {
  const minutes = chronometer.getMinutes()
  return chronometer.twoDigitsNumber(minutes)
}

function printSeconds() {
  const seconds = chronometer.getSeconds()
  return chronometer.twoDigitsNumber(seconds)
}

// ==> BONUS
function printMilliSeconds() {
  const milliSeconds = chronometer.getMilliSeconds()
  return chronometer.twoDigitsNumber(milliSeconds)
}

//The formatting is a bit long in this case but it was to avoid breaking Jasmine tests
function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}:${chronometer.twoDigitsNumber(chronometer.getMilliSeconds())}</li>`
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add('split');
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML == "START") {
    setSplitBtn();
    setStopBtn();
    chronometer.startClick(printTime);
  } else if (btnLeft.innerHTML == "STOP") {
    setResetBtn();
    setStartBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML == "RESET") {
    chronometer.resetClick();
    printTime()
    clearSplits()
  } else if (btnRight.innerHTML == "SPLIT") {
    printSplit();
  }
});

