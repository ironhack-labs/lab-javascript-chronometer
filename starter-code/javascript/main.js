let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let ol = document.getElementById('splits');

function printTime() {

  printMinutes()
  printSeconds()

}

function printMinutes() {
  setInterval(() => {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  }, 6000)

}

function printSeconds() {

  setInterval(() => {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  }, 1000)
}

function printMilliseconds() {}

function printSplit() {
  let li = document.createElement('li');

  li.innerHTML = (chronometer.currentTime)
  ol.appendChild(li)

}

function clearSplits() {
  ol.innerHTML = ''
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className.includes('start')) {
    btnLeft.innerHTML = 'STOP'
    btnLeft.className = 'btn stop'
    btnRight.innerHTML = 'SPLIT'
    btnRight.className = 'btn split'

    chronometer.startClick()
    printTime()
    printMilliseconds()
  } else {
    btnLeft.innerHTML = 'START'
    btnLeft.className = 'btn start'
    btnRight.innerHTML = 'RESET'
    btnRight.className = 'btn reset'
    chronometer.stopClick()
  }
})

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className.includes('reset')) {
    chronometer.resetClick()
    clearSplits()
  } else {
    printSplit()
  }


});