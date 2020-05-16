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
  minDec.innerText = chronometer.splitClick()[0]
  minUni.innerText = chronometer.splitClick()[1]
}

function printSeconds() {
  // ... your code goes here
  secDec.innerText = chronometer.getSeconds()
  secUni.innerText = chronometer.getSeconds()
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
  btnLeft.setAttribute("class", "btn stop")
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = "SPLIT"
  btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = "START"
  btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = "RESET"
  btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  if (btnLeft.innerText === "START") {
    setStopBtn()
    chronometer.startClick()
    printTime()
  } else {
    setStartBtn()
  }
})

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  if (btnRight.innerText === "RESET") {
    setSplitBtn()
  } else {
    setResetBtn()
  }
})
