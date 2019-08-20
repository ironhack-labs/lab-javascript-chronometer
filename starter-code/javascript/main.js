var chronometer = new Chronometer()

/*****************************************/
/************** DOM ELEMENTS **************/
/*****************************************/

var btnLeft = document.getElementById('btnLeft')
var btnRight = document.getElementById('btnRight')
var minDec = document.getElementById('minDec')
var minUni = document.getElementById('minUni')
var secDec = document.getElementById('secDec')
var secUni = document.getElementById('secUni')
var milDec = document.getElementById('milDec')
var milUni = document.getElementById('milUni')
const splitsList = document.querySelector('#splits')

/*****************************************/
/***************** TIME *****************/
/*****************************************/

function printMinutes() {
  setInterval(() => {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  }, 60000)
}

function printSeconds() {
  setInterval(() => {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  }, 1000)
}

function printMilliseconds() {
  setInterval(() => {
    milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[0]
    milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[1]
  }, 10)
}

function printTime() {
  printSeconds()
  printMinutes()
  printMilliseconds()
}

/*****************************************/
/**************** VISUAL ****************/
/*****************************************/

function startToStopStyles() {
  btnLeft.innerHTML = 'STOP'
  btnLeft.classList.add('stop')
  btnRight.innerHTML = 'SPLIT'
  btnRight.classList.add('split')
}
function stopToStartStyles() {
  btnLeft.innerHTML = 'START'
  btnLeft.classList.remove('stop')
  btnRight.innerHTML = 'RESET'
  btnRight.classList.remove('split')
}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

/*****************************************/
/************ EVENT LISTENERS ************/
/*****************************************/

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (btnLeft.innerHTML === 'START') {
    startToStopStyles() // Visual (styles and InnerHTML)
    chronometer.startClick() // Starts the chronometer
    printTime()
  } else {
    stopToStartStyles() // Visual (styles and InnerHTML)
    chronometer.stopClick()
  }
})

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (btnRight.innerHTML === 'SPLIT') {
    const splitItem = document.createElement('li')

    const mins = chronometer.twoDigitsNumber(chronometer.getMinutes())
    const secs = chronometer.twoDigitsNumber(chronometer.getSeconds())

    const timeIntheCorrectFormat = `${mins}:${secs}`
    splitItem.innerHTML = timeIntheCorrectFormat

    splitsList.appendChild(splitItem)
  } else {
    chronometer.currentTime = 0
    splitsList.innerHTML = ''
  }
})
