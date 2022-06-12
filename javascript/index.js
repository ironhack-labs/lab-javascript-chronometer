console.log('Index.js')
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
  console.log('hola print time')
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber((chronometer.getMinutes())).split('')
  console.log('minutes ' + minutes)
  minDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber((chronometer.getSeconds())).split('')
  console.log('seconds ' + seconds)
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitsList = document.getElementById('splits')
  const listElement = document.createElement('li')
  listElement.innerText = chronometer.split()
  splitsList.appendChild(listElement)
}

function clearSplits() {
  const liElement = document.getElementById('splits')
  console.log(liElement)
  while (liElement.firstChild) {
    liElement.removeChild(liElement.firstChild);
  }
}

function setStopBtn() {
  chronometer.stop()
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  chronometer.start(printTime)
}

function setResetBtn() {
  clearSplits()
  chronometer.reset()
  printTime()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if(btnLeftElement.className.includes('start')) {
    setStartBtn()
    btnRightElement.classList.replace('reset', 'split')
    btnLeftElement.innerText = 'STOP'
    btnRightElement.innerText = 'SPLIT'
  } else if (btnLeftElement.className.includes('stop')) {
    setStopBtn()    
    btnRightElement.classList.replace('split', 'reset')
    btnLeftElement.innerText = 'START'
    btnRightElement.innerText = 'RESET'
  }

  btnLeftElement.classList.toggle('stop')
  btnLeftElement.classList.toggle('start')
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if(btnRightElement.className.includes('reset')) {
    console.log('reset')
    setResetBtn()
  } else if (btnRightElement.className.includes('split')) {
    console.log('split')
    setSplitBtn()
  }
  
});
