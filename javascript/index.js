const chronometer = new Chronometer()

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
    printMinutes()
    printSeconds()
}

function printMinutes() {
  minDecElement.innerText = chronometer.split()[0]
  minUniElement.innerText = chronometer.split()[1]
}

function printSeconds() {
  secDecElement.innerText = chronometer.split()[3]
  secUniElement.innerText = chronometer.split()[4]
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
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.value === 'btn start'){
    chronometer.start()
    setInterval(()=>{
      printTime()
    }, 1000)
    btnLeftElement.classList.replace('start', 'stop');
    chronometer.stop()
    btnLeftElement.innerText = 'STOP'
    btnRightElement.classList.replace('reset', 'split')
    btnRightElement.innerText = 'SPLIT'
  }
  else {
    btnLeftElement.classList.replace('stop', 'start');
    btnLeftElement.innerText = 'START'
    btnRightElement.classList.replace('split', 'reset')
    btnRightElement.innerText = 'RESET'

  }


  // btnRightElement
  // btnLeftElement.innerText = 'STOP'
  // btnLeftElement.classList.toggle('start')
  // btnLeftElement.innerText = 'Ssss'

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

});


