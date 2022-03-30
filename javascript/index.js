const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft')
const btnRightElement = document.getElementById('btnRight')



// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');



function printTime() {

  // ... your code goes here
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.getMinutes()
}

function printSeconds() {

  chronometer.getSeconds()

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stop()
}

function setSplitBtn() {
  chronometer.split()
}

function setStartBtn() {
  chronometer.start()
}

function setResetBtn() {
  chronometer.reset()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (chronometer.currentTime === 0) {
    setStartBtn()
    btnLeftElement.innerHTML = 'STOP'
    btnLeftElement.className = "btn stop"

    btnRightElement.innerHTML = 'SPLIT'
    btnRightElement.className = "btn split"

  } else {
    setStopBtn()
    btnLeftElement.innerHTML = 'START'
    btnLeftElement.className = "btn start"

    btnRightElement.innerHTML = 'RESET'
    btnRightElement.className = "btn reset"
  }


})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (chronometer.currentTime === 0) {
    setResetBtn()
    btnLeftElement.innerHTML = 'START'
    btnLeftElement.className = "btn start"

    btnRightElement.innerHTML = 'RESET'
    btnRightElement.className = "btn reset"
  } else {
    setSplitBtn()
    btnLeftElement.innerHTML = 'STOP'
    btnLeftElement.className = "btn stop"

    btnRightElement.innerHTML = 'SPLIT'
    btnRightElement.className = "btn split"
  }
})
