var chronometer = new Chronometer()
var btnLeft = document.getElementById('btnLeft')
var btnRight = document.getElementById('btnRight')
var minDec = document.getElementById('minDec')
var minUni = document.getElementById('minUni')
var secDec = document.getElementById('secDec')
var secUni = document.getElementById('secUni')
var milDec = document.getElementById('milDec')
var milUni = document.getElementById('milUni')
var splitsList = document.getElementById('splits')
var startIntervalId = 0

function printTime() {
  printMinutes()
  printSeconds()
  printSplit()
  if (chronometer.status === 'Stopped') {
    setStartBtn()
    setResetBtn()
  } else {
    setStopBtn()
    setSplitBtn()
  }
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = minutes[0]
  minUni.innerHTML = minutes[1]
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerHTML = seconds[0]
  secUni.innerHTML = seconds[1]
}

function printMilliseconds() {}

function printSplit() {
  splitsList.innerHTML = chronometer.splits
    .map(split => {
      const minutes = parseInt(split / 60)
      const seconds = parseInt(split % 60)
      const time = chronometer.twoDigitsNumber(minutes) + ':' + chronometer.twoDigitsNumber(seconds)
      return '<li>' + time + '</li>'
    })
    .join('')
}

function clearSplits() {
  chronometer.splits = []
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT'
  btnRight.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerHTML = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET'
  btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (chronometer.status === 'Stopped') {
    chronometer.startClick()
    startIntervalId = setInterval(() => printTime(), 1000)
  } else {
    chronometer.stopClick()
    clearInterval(startIntervalId)
  }
  printTime()
})

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (chronometer.status === 'Stopped') {
    chronometer.resetClick()
  } else {
    chronometer.splitClick()
  }
  printTime()
})
