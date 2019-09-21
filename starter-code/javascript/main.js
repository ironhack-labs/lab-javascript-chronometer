const chronometer = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');


function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  const min = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = min[0]
  minUni.innerText = min[1]
}

function printSeconds() {
  const sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = sec[0]
  secUni.innerText = sec[1]
}

function printMilliseconds() {
  const mil = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  milDec.innerText = mil[0]
  milUni.innerText = mil[1]
}

function printSplit() {
  let split = document.createElement('li')
  split.innerText = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMilliseconds())}`
  document.getElementById('splits').appendChild(split)
}

function clearSplits() {
   [...document.getElementById('splits').childNodes].forEach(el => el.remove())
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.classList.toggle('start')
  btnLeft.classList.toggle('stop')
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT'
  btnRight.classList.toggle('reset')
  btnRight.classList.toggle('split')
}

function setStartBtn() {
  btnLeft.innerText = 'START'
  btnLeft.classList.toggle('start')
  btnLeft.classList.toggle('stop')
}

function setResetBtn() {
  btnRight.innerText = 'RESET'
  btnRight.classList.toggle('reset')
  btnRight.classList.toggle('split')
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  if (!chronometer.running) {
    chronometer.startClick()
    setStopBtn()
    setSplitBtn()
    printTime()

  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }

})

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (!chronometer.running) {
    chronometer.resetClick()
    printMinutes()
    printSeconds()
    printMilliseconds()
    clearSplits()
  } else {
    printSplit()
  }
})
