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
  // ... your code goes here
  printMinutes()
  printSeconds()
  console.log(minutes)
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber((chronometer.getMinutes())).split('')
  console.log(minutes)
  minDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]

}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber((chronometer.getMinutes())).split('')
  console.log(minutes)
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]

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
  // ... your code goes here
  
  console.log(btnLeftElement.className)
  btnLeftElement.classList.toggle('stop')
  btnLeftElement.classList.toggle('start')

  if(btnLeftElement.className.includes('start')) {
    btnRightElement.classList.replace('split', 'reset')
    btnLeftElement.innerText = 'START'
    btnRightElement.innerText = 'RESET'
    chronometer.start(printTime())
  } else if (btnLeftElement.className.includes('stop')) {
    btnRightElement.classList.replace('reset', 'split')
    btnLeftElement.innerText = 'STOP'
    btnRightElement.innerText = 'SPLIT'
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.className.includes('reset')) {
    console.log('reset')
  } else if (btnRightElement.className.includes('split')) {
    console.log('split')
  }

});
