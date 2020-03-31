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
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0)
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1)
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0)
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitElement = document.createElement('li')
  splitElement.innerHTML = chronometer.splitClick()
  splits.appendChild(splitElement)
}

function clearSplits() {
  const allSplits = document.querySelectorAll('#splits li')
  allSplits.forEach(elm => elm.remove())
}

function setStopBtn() {
  btnLeft.className = "btn stop"
  btnLeft.innerHTML = "STOP"
  chronometer.startClick(printTime)
}

function setSplitBtn() {
  btnRight.className = "btn split"
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.className = "btn start"
  btnLeft.innerHTML = "START"
  chronometer.stopClick()
}

function setResetBtn() {
  btnRight.className = "btn reset"
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  btnLeft.classList.contains('start') ? setStopBtn() : setStartBtn()
  btnRight.classList.contains('reset') ? setSplitBtn() : setResetBtn()


  // btnLeft.classList.toggle('start')
  // btnLeft.classList.toggle('stop')
  // btnLeft.classList.contains('start') ? btnLeft.innerHTML = "START" : btnLeft.innerHTML = "STOP"

  // btnRight.classList.toggle('reset')
  // btnRight.classList.toggle('split')
  // btnRight.classList.contains('reset') ? btnRight.innerHTML = "RESET" : btnRight.innerHTML = "SPLIT"

});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.classList.contains('split')) printSplit()
  else {
    clearSplits()
    chronometer.resetClick()
    printTime()
  }

});
