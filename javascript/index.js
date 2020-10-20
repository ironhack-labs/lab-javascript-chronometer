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
  printMilliseconds()
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  let uni = minutes.charAt(1)
  let dec = minutes.charAt(0)
  minUni.innerHTML = uni
  minDec.innerHTML = dec
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  let uni = seconds.charAt(1)
  let dec = seconds.charAt(0)
  secUni.innerHTML = uni
  secDec.innerHTML = dec
}

// ==> BONUS
function printMilliseconds() {
  let milli = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  let uni = milli.charAt(1)
  let dec = milli.charAt(0)
  milUni.innerHTML = uni
  milDec.innerHTML = dec
}

function printSplit() {
  const newLi = document.createElement('li')
  newLi.innerHTML = chronometer.splitClick()
  splits.appendChild(newLi)
}

function clearSplits() {
  splits.innerHTML = ''
}

function setStopBtn() {
  btnLeft.classList.remove('start')
  btnLeft.classList.add('stop')
  btnLeft.innerHTML = "STOP"
  return btnLeft
}

function setSplitBtn() {
  btnRight.classList.remove('reset')
  btnRight.classList.add('split')
  btnRight.innerHTML = "SPLIT"
  return btnRight
}

function setStartBtn() {
  btnLeft.classList.remove('stop')
  btnLeft.classList.add('start')
  btnLeft.innerHTML = "START"
  return btnLeft
}

function setResetBtn() {
  btnRight.classList.remove('split')
  btnRight.classList.add('reset')
  btnRight.innerHTML = "RESET"
  return btnRight
}

let interval
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick()
    interval = setInterval(() =>
      printTime(), 1)
    setStopBtn()
    setSplitBtn()
  } else if (btnLeft.innerHTML === 'STOP') {
    chronometer.stopClick()
    clearInterval(interval)
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'SPLIT') {
    printSplit()
  } else if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick()
    clearSplits()
    minDec.innerHTML = '0'
    minUni.innerHTML = '0'
    secDec.innerHTML = '0'
    secUni.innerHTML = '0'
    milDec.innerHTML = '0'
    milUni.innerHTML = '0'
  }
});