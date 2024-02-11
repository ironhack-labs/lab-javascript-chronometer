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

function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
}

// function printMilliseconds() {
//   milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds())[0]
//   milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds())[1]
// }

function printTime() {
  printMinutes()
  printSeconds()
  // printMilliseconds()
}

function printSplit() {
  const newSplitElem = document.createElement('li')
  newSplitElem.classList.add("list-item")
  newSplitElem.innerHTML = chronometer.split()
  splitsElement.appendChild(newSplitElem);
}

function clearSplits() {
  chronometer.reset(printTime)
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

// Change left button from start to stop (by clicking START)
function setStopBtn(btn) {
  btn.classList.replace("start","stop")
  btn.innerHTML = 'STOP'
}

// Change right button from reset to split (by clicking START)
function setSplitBtn(btn) {
  btn.classList.replace("reset","split")
  btn.innerHTML = 'SPLIT'
}

// Change left button from stop to start (by clicking STOP)
function setStartBtn(btn) {
  btn.classList.replace("stop","start")
  btn.innerHTML = 'START'
}

// Change right button from split to reset (by clicking STOP)
function setResetBtn(btn) {
  btn.classList.replace("split","reset")
  btn.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') // Chronometer stopped
  {
    setStopBtn(btnLeftElement)
    setSplitBtn(btnRightElement)
    chronometer.start(printTime)
  }
  else if (btnLeftElement.className === 'btn stop') // Chronometer running
  {
    setStartBtn(btnLeftElement)
    setResetBtn(btnRightElement)
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn reset') // Chronometer stopped
  {
    clearSplits()
  }
  else if (btnRightElement.className === 'btn split') // Chronometer running
  {
    printSplit()
  }
});
