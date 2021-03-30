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
  printSeconds()
  printMinutes()

}

function printMinutes() {
  // ... your code goes here
  minutes = chronometer.getMinutes()
  minText = chronometer.twoDigitsNumber(seconds)

  minText1 = minText[0]
  minText2 = minText[1]

  document.querySelector("#secDec").textContent = minText1
  document.querySelector("#secUni").textContent = minText2
}

function printSeconds() {
  // ... your code goes here
  seconds = chronometer.currentTime
  secText = chronometer.twoDigitsNumber(seconds)

  secText1 = secText[0]
  secText2 = secText[1]
  console.log(secText2);

  document.querySelector("#secDec").textContent = secText1
  document.querySelector("#secUni").textContent = secText2

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
  const selectButton = document.querySelector("#btnLeft")
  selectButton.className = "btn stop"
  selectButton.textContent = "STOP"
}

function setSplitBtn() {
  // ... your code goes here
  const selectButton = document.querySelector("#btnRight")
  selectButton.className = "btn split"
  selectButton.textContent = "SPLIT"
}

function setStartBtn() {
  // ... your code goes here
  const selectButton = document.querySelector("#btnLeft")
  selectButton.className = "btn start"
  selectButton.textContent = "START"
}

function setResetBtn() {
  // ... your code goes here
  const selectButton = document.querySelector("#btnRight")
  selectButton.className = "btn reset"
  selectButton.textContent = "RESET"
}

// Start/Stop Button
let count = 0
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (count === 0 || count % 2 === 0) {
    chronometer.startClick()
    setStopBtn()
    setSplitBtn()
    count++

  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
    count++

  }
  printTime()

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here

});
