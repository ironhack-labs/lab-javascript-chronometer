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
    printMinutes() 
    printSeconds()
    printMilliseconds()
}

function printMinutes() {
  const min = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerText = min.charAt(0)
  minUniElement.innerText = min.charAt(1)
}

function printSeconds() {
  const sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds())

  secDecElement.innerText = sec.charAt(0)
  secUniElement.innerText = sec.charAt(1)
}

// ==> BONUS
function printMilliseconds() {
  const milli = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())

  milDecElement.innerText = milli.charAt(0)
  milUniElement.innerText = milli.charAt(1)
}

function printSplit() {
  const split = chronometer.split()
  splitsElement.innerHTML += `<li class='split'>${split}</li>`
}

function clearSplits() {
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  btnLeftElement.classList.replace('start', 'stop')
  btnLeftElement.innerText = "STOP"
}

function setSplitBtn() {
  btnRightElement.classList.replace('reset', 'split')
  btnRightElement.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.replace('stop', 'start')
  btnLeftElement.innerText = "START"
}

function setResetBtn() {
  btnRightElement.classList.replace('split', 'reset')
  btnRightElement.innerText = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let interval = null

  if(btnLeftElement.classList.contains('start')){
    setStopBtn()
    setSplitBtn()
    chronometer.start()
    interval = setInterval(printTime, 10);
    return 
  }

    setStartBtn()
    setResetBtn()
    clearInterval(interval)
    chronometer.stop()
    return
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    chronometer.reset()
    clearSplits()
    minDecElement.innerText = 
      minUniElement.innerText = 
      secDecElement.innerText = 
      secUniElement.innerText = 
      milDecElement.innerText = 
      milUniElement.innerText =  0
      return
  }

  return printSplit()
  
});
