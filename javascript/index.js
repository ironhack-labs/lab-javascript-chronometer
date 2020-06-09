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
  setInterval(() => {
    printSeconds()
    printMinutes()
  }, 1000)
}

function printMinutes() {
  let minutes = chronometer.getMinutes()
  let minutesStr = chronometer.twoDigitsNumber(minutes)
  minDec.innerText = minutesStr[0]
  minUni.innerText = minutesStr[1]
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.getSeconds()
  let secondsStr = chronometer.twoDigitsNumber(seconds)
  secDec.innerText = secondsStr[0]
  secUni.innerText = secondsStr[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let split = document.createElement('li')
  split.innerText = chronometer.splitClick()
  let splitList = document.querySelector('#splits')
  splitList.appendChild(split)
}

function clearSplits() {
  document.querySelectorAll('li').forEach(elem => elem.remove())
}

function setStopBtn() {
  btnLeft.classList.toggle("stop")
  btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  btnRight.classList.toggle("split")
  btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeft.classList.remove("stop")
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  btnRight.classList.remove("split")
  btnRight.innerText = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.className === 'btn start') {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick()
    printTime()
  } else {
    setStartBtn()
    setResetBtn()

    chronometer.stopClick()
  }
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className === 'btn reset') {
    setResetBtn()
    chronometer.resetClick()
    clearSplits()
  } else {
    printSplit()
  }
});
