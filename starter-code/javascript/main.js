const chronometer = new Chronometer()
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');



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

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

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

  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP'
    btnLeft.classList.remove('start')
    btnLeft.classList.add('stop')
    chronometer.startClick()
    printTime()
  } else {
    btnLeft.innerHTML = 'START'
    btnLeft.classList.remove('stop')
    btnLeft.classList.add('start')
    chronometer.stopClick()
  }
});

// Reset/Split Button

btnRight.addEventListener('click', function () {


  if (btnRight.innerHTML === 'RESET') {
    btnRight.innerHTML = 'SPLIT'
    btnRight.classList.add('split')


  } else {
    btnRight.innerHTML = 'RESET'
    btnRight.classList.remove('split')
  }

});