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

function printTime(minutes, seconds) {
  this.printMinutes(minutes)
  this.printSeconds(seconds)
}

function printMinutes(minutes) {
  document.getElementById('minDec').textContent = minutes[0]
  document.getElementById('minUni').textContent = minutes[1]
}

function printSeconds(seconds) {
  document.getElementById('secDec').textContent = seconds[0]
  document.getElementById('secUni').textContent = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const newSplit = document.createElement('li')
  newSplit.textContent =  chronometer.split()
  const splitList = document.getElementById('splits')
  splitList.appendChild(newSplit)
}

function clearSplits() {
  const splitList = document.getElementById('splits')
  splitList.innerHTML = ""
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP'
  btnLeftElement.classList.replace("start", "stop")
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT'
  btnRightElement.classList.replace("reset", "split")
}

function setStartBtn() {
  btnLeftElement.textContent = 'START'
  btnLeftElement.classList.replace("stop", "start")
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET'
  btnRightElement.classList.replace("split", "reset")
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (event) => {
  console.log('event', event.target.textContent)
  if (event.target.textContent === 'START'){
    chronometer.start(this.printTime)
    setSplitBtn()
    setStopBtn()
  }
  else{
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', (event) => {
  if (event.target.textContent === 'SPLIT'){
    printSplit()
  }
  else{
    clearSplits()
  }
});
