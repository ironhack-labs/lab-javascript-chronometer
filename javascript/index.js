const chronometer = new Chronometer()

// get the buttons:
const btnLeft = document.getElementById("btnLeft")
const btnRight = document.getElementById("btnRight")

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec")
let minUni = document.getElementById("minUni")
let secDec = document.getElementById("secDec")
let secUni = document.getElementById("secUni")
let milDec = document.getElementById("milDec")
let milUni = document.getElementById("milUni")
let splits = document.getElementById("splits")

function printTime() {
  // ... your code goes here
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  const min = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = min[0]
  minUni.innerText = min[1]
}

function printSeconds() {
  // ... your code goes here
  const sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = sec[0]
  secUni.innerText = sec[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerText = "STOP"
  btnLeft.className = "btn stop"
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = "SPLIT"
  btnRight.className = "btn split"
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = "START"
  btnLeft.className = "btn start"
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = "RESET"
  btnRight.className = "btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerText === 'START') {
    chronometer.startClick(printTime)
    setStopBtn()
    setSplitBtn()
    
    // printTime()
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()
  }
})

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  if (btnRight.innerText === "RESET") {
    chronometer.resetClick()
    printTime()
    clearSplits()
  } else {
    setResetBtn()
  }
})
