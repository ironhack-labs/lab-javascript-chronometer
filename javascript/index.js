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
  // console.log(chronometer.currentTime)
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0];
  milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1];
}

function printSplit() {
  if (chronometer.intervalId !== 0) {
    const li = document.createElement('li');
    li.innerText += chronometer.splitClick()
    splits.appendChild(li)
  }

}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  if (chronometer.intervalId === 0) {
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
    btnRight.textContent = "RESET";
  }
  else {
    btnRight.classList.add("split");
    btnRight.classList.remove("reset");
    btnRight.textContent = "SPLIT";
  }
}

function setStartBtn() {
  if (chronometer.intervalId === 0) {
    btnLeft.classList.add("stop");
    btnLeft.classList.remove("start");
    btnLeft.textContent = "STOP";

    chronometer.startClick(printTime)

  }
  else {
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");
    btnLeft.textContent = "START";

    chronometer.stopClick()
  }
}

function setResetBtn() {
  if (chronometer.intervalId === 0) {
    chronometer.resetClick()
    printTime()
    clearSplits()
  }
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  setStartBtn()
  setSplitBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  printSplit()
  setResetBtn()
});
