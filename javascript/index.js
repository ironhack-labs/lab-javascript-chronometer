

const chronometer = new Chronometer()

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
  // ... your code goes here
  printSeconds()
  printMinutes()

}

function printMinutes() {
  // ... your code goes here
  let currentMinute = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).split("")

  let minDec = document.getElementById("minDec")
  let minUni = document.getElementById("minUni")

  minUni.innerText = currentMinute[1]
  minDec.innerText = currentMinute[0]
}

function printSeconds() {
  // ... your code goes here
  let currentSecond = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).split("")

  let secDec = document.getElementById("secDec")
  let secUni = document.getElementById("secUni")

  secUni.innerText = currentSecond[1]
  secDec.innerText = currentSecond[0]

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

function setStopBtn(btn) {
  // ... your code goes here
  chronometer.start(printTime)
  btn.innerText = "STOP"
  let classes = ["start", "stop"]
  classes.map(c => btn.classList.toggle(c))
}

function setSplitBtn(btn) {
  // ... your code goes here
  btn.innerText = "SPLIT"

  let classes = ["split", "reset"]
  classes.map(c => btn.classList.toggle(c))
}

function setStartBtn(btn) {
  // ... your code goes here
  chronometer.stop()
  btn.innerText = "START"

  let classes = ["start", "stop"]
  classes.map(c => btn.classList.toggle(c))
}

function setResetBtn(btn) {
  // ... your code goes here
  btn.innerText = "RESET"

  let classes = ["split", "reset"]
  classes.map(c => btn.classList.toggle(c))

}

// Start/Stop Button
btnLeftElement.addEventListener('click', (e) => {
  // ... your code goes here
  !chronometer.intervalId ?
    (setStopBtn(btnLeftElement),
      setSplitBtn(btnRightElement))
    :
    (setStartBtn(btnLeftElement),
      setResetBtn(btnRightElement))

});

// Reset/Split Button
btnRightElement.addEventListener('click', (e) => {
  // ... your code goes here

});
