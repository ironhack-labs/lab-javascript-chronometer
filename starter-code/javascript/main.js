const chronometer = new Chronometer();
const btnLeft     = document.getElementById('btnLeft');
const btnRight    = document.getElementById('btnRight');
const minDec      = document.getElementById('minDec');
const minUni      = document.getElementById('minUni');
const secDec      = document.getElementById('secDec');
const secUni      = document.getElementById('secUni');
const milDec      = document.getElementById('milDec');
const milUni      = document.getElementById('milUni');


function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  const minArr = chronometer.twoDigitsNumber(chronometer.getMinutes()).split("")
  minDec.innerText = minArr[0]
  minUni.innerText = minArr[1]
}

function printSeconds() {
  const secArr = chronometer.twoDigitsNumber(chronometer.getSeconds()).split("")
  secDec.innerText = secArr[0]
  secUni.innerText = secArr[1]
}

function printMilliseconds() {
  const milArr = chronometer.twoDigitsNumber(chronometer.getMilliSeconds()).split("")
  milDec.innerText = milArr[0]
  milUni.innerText = milArr[1]
}

function printSplit() {
  const li = document.createElement('li')
  document.getElementById('splits').appendChild(li)
  const minArr = chronometer.twoDigitsNumber(chronometer.getMinutes()).split("")
  const secArr = chronometer.twoDigitsNumber(chronometer.getSeconds()).split("")
  const milArr = chronometer.twoDigitsNumber(chronometer.getMilliSeconds()).split("")
  li.innerText = `${minArr[0]}${minArr[1]}:${secArr[0]}${secArr[1]}:${milArr[0]}${milArr[1]}`
}

function clearSplits() {
  const ol = document.getElementById('splits')
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild)
  }
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.setAttribute("class", "btn stop")
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT'
  btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
  btnLeft.innerText = 'START'
  btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
  btnRight.innerText = 'RESET'
  btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (this.classList.contains('start')) {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick()
    setInterval(printTime, 10)
  } else if (this.classList.contains('stop')) {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()
  }
})

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (this.classList.contains('split')) {
    printSplit()
  } else if (this.classList.contains('reset')) {
    clearSplits()
    chronometer.resetClick()
    printTime()
  }
})