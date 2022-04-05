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
  printSeconds()
  printMinutes()
}

function printMinutes() {
  let minutes = chronometer.getMinutes()
  if (minutes >= 10){
    secDecElement.innerHTML = Math.floor(minutes / 10)
    secUniElement.innerText = minutes % 10
  } else {
    minDecElement.innerHTML = 0
    minUniElement.innerText = minutes
  }
}


function printSeconds() {
  let seconds = chronometer.getSeconds()
  if (seconds >= 10){
    secDecElement.innerHTML = Math.floor(seconds / 10)
    secUniElement.innerText = seconds % 10
  } else {
    secDecElement.innerHTML = 0
    secUniElement.innerText = seconds
  }
}

function printSplit() {
  splitsElement.innerHTML += `<li>${chronometer.split()}</li>`
}

function clearSplits() {
  splitsElement.innerHTML = ``
  chronometer.reset()
  printTime()
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop'
  btnLeftElement.innerHTML = 'STOP'
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT"
  btnRightElement.className = "btn split"
}

function setStartBtn() {
  btnLeftElement.className = 'btn start'
  btnLeftElement.innerHTML = 'START'
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET"
  btnRightElement.className = "btn reset"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className.includes('start')){
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className.includes('reset')){
    clearSplits()
  } else {
    printSplit()
  }
});
