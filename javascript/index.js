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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const $li = document.createElement('li')
  splits.appendChild($li)
  $li.innerHTML = chronometer.splitClick()
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === 'START') {
    btnLeft.innerText = 'STOP'
    btnLeft.className = 'btn stop'
    btnRight.innerText = 'SPLIT'
    btnRight.className = 'btn split'
    chronometer.startClick()
    setInterval(() => {
      printTime()
    }, 1)
  } else {
    btnLeft.innerText = 'START'
    btnLeft.className = 'btn start'
    btnRight.innerText = 'RESET'
    btnRight.className = 'btn reset'
    chronometer.stopClick()
  }
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'SPLIT') {
    printSplit()
  } else {
    setResetBtn()
    splits.innerHTML = ''
  }
})
