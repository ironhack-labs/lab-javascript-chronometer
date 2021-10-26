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
}

function printMinutes() {
  let decMin = Math.floor(chronometer.getMinutes() / 10)
  let uniMin = chronometer.getMinutes() % 10

  console.log(decMin, uniMin);

  minDecElement.textContent = '' + decMin
  minUniElement.textContent = '' + uniMin

}

function printSeconds() {
  let decSec = Math.floor(chronometer.getSeconds() / 10)
  let uniSec = chronometer.getSeconds() % 10

  secDecElement.textContent = '' + decSec
  secUniElement.textContent = '' + uniSec

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  
  splitsElement.innerHTML += `<li>${minDecElement.textContent}${minUniElement.textContent} : ${secDecElement.textContent}${secUniElement.textContent}</li>`

}

function clearSplits() {
  splitsElement.innerHTML = ''
  
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP'
  btnLeftElement.className = 'btn stop'
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT'
  btnRightElement.className = 'btn split'
}

function setStartBtn() {
  btnLeftElement.innerText = 'START'
  btnLeftElement.className = 'btn start'
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET'
  btnRightElement.className = 'btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
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
  if (btnRightElement.innerText === 'SPLIT') {
    printSplit()
  } else {
    clearSplits()
    chronometer.reset()
    printTime()
  }
});
