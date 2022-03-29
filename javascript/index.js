const chronometer = new Chronometer();

console.log(setStartBtn())
console.log(printSeconds())



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
  setInterval(() => {
    let totalMinutes = chronometer.getMinutes()
    let computedMinutes = chronometer.computeTwoDigitNumber(totalMinutes)

    let totalSeconds = chronometer.getSeconds()
    let computedSeconds = chronometer.computeTwoDigitNumber(totalSeconds)

    secDecElement.textContent = computedSeconds.charAt(0)
    secUniElement.textContent = computedSeconds.charAt(1)
    minDecElement.textContent = computedMinutes.charAt(0)
    minUniElement.textContent = computedMinutes.charAt(1)
  }, 1000)

}

function printMinutes() {
  return chronometer.getMinutes()
}

function printSeconds() {
  return chronometer.getSeconds()
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
  chronometer.start()
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const startButtonClick = document.querySelector('#btn-left')
  addEventListener('click', chronometer.start);
  printTime()
})