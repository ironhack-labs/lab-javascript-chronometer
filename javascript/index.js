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
  // ... your code goes here
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here this.twoDigitsNumber(this.getMinutes())
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  // ... your code goes here
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const $imprimir = document.querySelector("#splits");
  const actual = chronometer.splitClick()
  $imprimir.innerHTML += `<li>${actual}</li>`
}

function clearSplits() {
  // ... your code goes here
  chronometer.currentTime = 0
  const $borrar = document.querySelector("#splits");
  $borrar.innerHTML = ""
  printTime()
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerText = "STOP";
  btnLeft.classList.remove("start")
  btnLeft.classList.add("stop")
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = "SPLIT"
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = "START";
  btnLeft.classList.remove("stop")
  btnLeft.classList.add("start")
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = "RESET"
  btnRight.classList.remove("split")
  btnRight.classList.add("reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.classList.contains("start")) {
      setStopBtn()
      setSplitBtn()
      chronometer.startClick(printTime)
  } else if (btnLeft.classList.contains("stop")) {
      setStartBtn()
      setResetBtn()
      chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.classList.contains("reset")) {
      clearSplits()
  } else if (btnRight.classList.contains("split")) {
      printSplit()
  }
});
