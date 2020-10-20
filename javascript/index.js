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
  return
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  let uni = minutes.charAt(1)
  let dec = minutes.charAt(0)
  console.log(uni)
  console.log(dec)
  minUni.innerHTML = uni
  minDec.innerHTML = dec
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  let uni = seconds.charAt(1)
  let dec = seconds.charAt(0)
  console.log(uni)
  console.log(dec)
  secUni.innerHTML = uni
  secDec.innerHTML = dec
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const newLi = splits.createElement('li')
  newLi.innerHTML = chronometer.splitClick()
  splits.appendChild(newLi)
  return splits
}

function clearSplits() {
  splits.innerHTML = ''
  return splits
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

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick()
    let Interval = setInterval(() =>
      printTime(), 1000)
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stopClick()
    clearInterval(Interval)
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'STOP') {
    printSplit()
  } else {
    chronometer.resetClick()
    clearSplits()
    minDec.innerHTML = '0'
    minUni.innerHTML = '0'
    secDec.innerHTML = '0'
    secUni.innerHTML = '0'
  }
});