const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes(chronometer.getMinutes())
  printSeconds(chronometer.getSeconds())
}

function printMinutes(minutes) {
  minUniElement.innerHTML = Number(minutes.toString().slice(-1))
  minDecElement.innerHTML = Number(minutes.toString().slice(0, 1))
}

function printSeconds(seconds) {
  secUniElement.innerHTML = Number(seconds.toString().slice(-1))
  secDecElement.innerHTML = Number(seconds.toString().slice(0, 1))
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(el) {
  splitsElement.innerHTML = `<li>` + el + `</li>`
}

function clearSplits() {
  splitsElement.innerHTML = ``
}

function setStopBtn() {
  chronometer.stop()
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.innerHTML = 'START'
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  btnRightElement.innerHTML = 'RESET'
}

function setSplitBtn() {
  chronometer.split(printSplit)
}

function setStartBtn() {
  chronometer.start(printTime)
  btnLeftElement.classList.add('stop')
  btnLeftElement.innerHTML = 'STOP'
  btnRightElement.classList.add('split')
  btnRightElement.innerHTML = 'SPLIT'
}

function setResetBtn() {
   minDecElement.innerHTML = `0`
   minUniElement.innerHTML = `0`
   secDecElement.innerHTML = `0`
   secUniElement.innerHTML = `0`
   milDecElement.innerHTML = `0`
   milUniElement.innerHTML = `0`
}

// Start/Stop Button
btnLeftElement.addEventListener('click', function () {
  if (btnLeftElement.innerHTML == 'START') {
    //chronometer.start()
    setStartBtn()
  } else if (btnLeftElement.innerHTML == 'STOP') {
    setStopBtn()
  }
})


// Reset/Split Button
btnRightElement.addEventListener('click', function () {
  if (btnRightElement.innerHTML == 'SPLIT') {
    chronometer.split();
  } else if (btnRightElement.innerHTML == 'RESET') {
    setResetBtn()
    chronometer.reset()
    clearSplits()
  }
})