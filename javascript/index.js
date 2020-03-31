const chronometer = new Chronometer()

// get the buttons:
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec')
let minUni = document.getElementById('minUni')
let secDec = document.getElementById('secDec')
let secUni = document.getElementById('secUni')
let milDec = document.getElementById('milDec')
let milUni = document.getElementById('milUni')
let splits = document.getElementById('splits')

function printTime() {
  console.log(chronometer.currentTime)
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
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
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button

let isRunning = false

btnLeft.addEventListener('click', () => {
  if (isRunning === false) {
    btnLeft.className = 'btn stop'
    btnLeft.innerText = 'STOP'
    btnRight.className = 'btn split'
    btnRight.innerText = 'SPLIT'
    isRunning = true
    console.log("it's running")
    chronometer.startClick(printTime)
  } else {
    chronometer.stopClick()
    btnLeft.className = 'btn start'
    btnLeft.innerText = 'START'
    btnRight.className = 'btn reset'
    btnRight.innerText = 'RESET'
    isRunning = false
  }
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (isRunning == true) {
  } else {
  }
})
